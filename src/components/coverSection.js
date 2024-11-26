import React from "react";

const CoverSection = () => {
  return (
    <section id="cover2" style={{ direction: "rtl" }}>
      <div className="row">
        <div className="col-lg-5" style={{ textAlign: "center" }}>
          <h1>افضل التصاميم واجود انواع الطباعة</h1>
          <h2 style={{ color: "#FA961F" }}>اختيارك الافضل دوماً</h2>
          <br />
          <img
            src="/img/design-house.png"
            className="logo"
            alt="...."
            width={"80%"}
          />
        </div>
        <div className="image-container col-lg-5">
          <img src="/img/cover.png" alt="..." class="image img1" />
          <img src="/img/slide1.jpg" alt="..." class="image img2" />
          <img src="/img/slide3.jpg" alt="..." class="image img3" />
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
