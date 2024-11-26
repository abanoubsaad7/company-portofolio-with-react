import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [accounts, setAccounts] = useState(null); // Set initial state to null to indicate loading
  const [aboutUsContent, setAboutUsContent] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:6500/display/accounts")
      .then((response) => {
        setAccounts(response.data.accountsObj || {}); // Default to an empty object if no data
        console.log("response.data.accountsObj:", response.data.accountsObj);
      })
      .catch((error) => {
        console.error("Error fetching Accounts data:", error);
      });
    axios
      .get("http://localhost:6500/display/aboutUs")
      .then((response) => {
        setAboutUsContent(response.data.aboutUsContentObj);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);
  if (!accounts) {
    // Display a loading state or message until the data is fetched
    return <div>Loading accounts...</div>;
  }
  const whatsAppLink = `https://wa.me/${accounts.whatsApp.phone}`;

  if (!aboutUsContent) {
    return <div>Loading data...</div>;
  }
  return (
    <footer style={{ direction: "rtl" }}>
      <center>
        <div className="row container footerHeader">
          <div className="col-5">
            <h2>للحصول على عرض سعر مميز</h2>
          </div>
          <div className="col-5">
            <a href="/contactUs" className="button-64" style={{ width: "50%" }}>
              <span>اطلب الان</span>
            </a>
          </div>
        </div>
      </center>
      <div className="row container" style={{ marginRight: "0" }}>
        <div className="col-lg-4 footerContent">
          <img
            src="/img/design-house.png"
            width="100%"
            alt="..."
            style={{ display: "block" }}
          />
          <p>{aboutUsContent.description}</p>
        </div>
        <div className="col-lg-3 footerContent">
          <h3>خدماتنا</h3>
          <ul>
            <li>
              <a href="/service">تصميم</a>
            </li>
            <li>
              <a href="/service">طباعة</a>
            </li>
            <li>
              <a href="/service">واجهات</a>
            </li>
            <li>
              <a href="/service">kfljdkshv</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 footerContent">
          <h3>تواصل معنا</h3>
          <ul>
            <li>
              <a href={whatsAppLink} target="_blank" rel="noreferrer">
                whatsApp
              </a>
            </li>
            <li>
              <a
                href={accounts.facebookAcc.link}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="/service">واجهات</a>
            </li>
            <li>
              <a href="/service">kfljdkshv</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          direction: "ltr",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#800788",
          width: "100%",
          color: "#f0f0f0",
          height: "50px",
          padding: "1%",
        }}
      >
        <center>
          <h4>
            Designed and Developed by
            <span style={{ color: "#f5c32c" }}>Eng/Abanoub Saad</span>
          </h4>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
