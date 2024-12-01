import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const FeaturedProducts = () => {
  const [categories, setCategories] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get("http://localhost:6500/display/categories")
      .then((response) => {
        setCategories(response.data.categoriesArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, [categories]);

  const categoriesData = () => {
    return categories.map((item, index) => (
      <div
        className="card-container hidden-from-top"
        key={item._id}
        ref={(el) => (cardRefs.current[index] = el)} // Store refs for each card
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`http://localhost:6500/uploads/categoriesCoverImg/${item.img}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title" style={{ color: "#FA961F" }}>
              {item.name}
            </h3>
            <p className="card-text">{item.describtion}</p>
            <center>
              <a
                href="/serveice"
                className="btn button-64"
                style={{ width: "70%" }}
              >
                <span>اعرف اكتر</span>
              </a>
            </center>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ direction: "rtl", padding: "2%" ,  marginTop:"-25%" }}>
      <center>
        <h1 style={{ color: "#FA961F" }}> خدمات Design House </h1>
      </center>
      <div className="scroll-container">{categoriesData()}</div>
    </div>
  );
};

export default FeaturedProducts;
