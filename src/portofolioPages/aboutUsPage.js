import React, { useState, useEffect } from "react";
import MainNav from "../components/main_and_side_Bar/mainNav";
import Footer from "../components/footer";
import axios from "axios";
import CoverSection from "../components/coverSection";

const AboutUsPage = () => {
  const [aboutUsContent, setAboutUsContent] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:6500/display/aboutUs")
      .then((response) => {
        setAboutUsContent(response.data.aboutUsContentObj);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);
  if (!aboutUsContent) {
    return <div>Loading data...</div>;
  }
  return (
    <>
      <section id="cover">
        <MainNav />
      </section>
      <section style={{backgroundColor: '#060736'}}>
        <h1>{aboutUsContent.companyName}</h1>
        <h3>{aboutUsContent.description}</h3>
      </section>
      <CoverSection/>
      <Footer />
    </>
  );
};

export default AboutUsPage;
