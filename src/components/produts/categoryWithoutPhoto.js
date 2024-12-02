import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const CategoryWithoutPhoto = () => {
  const [categories, setCategories] = useState([]);
  const cardRefs = useRef([]);
  useEffect(() => {
    // Fetch categories
    axios
      .get("http://localhost:6500/server/v1/display/categories")
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
      <div className="col-lg-6" >
        <div
          className="hidden-from-left"
          ref={(el) => (cardRefs.current[index] = el)}
          style={{margin:"20px" , padding:"20px"}}
        >
          <div>
            <h2 style={{ color: "#FA961F" }}>{item.name}</h2>
            <p>{item.describtion}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ direction: "rtl", padding: "2%" }}>
      <center>
        <h1 style={{ color: "#FA961F" }}>
          خدمات Design House أفضل شركة تصميم و طباعة في مصر
        </h1>
      </center>
      <div className="categoryWithoutPhoto row">
        {categoriesData()}
      </div>
    </div>
  );
};

export default CategoryWithoutPhoto;
