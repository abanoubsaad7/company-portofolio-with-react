import React from "react";

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{padding:"3% 1.5% "}}>
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/" style={{textShadow:"#EFEFF1"}}>
            <i>D</i>esign <i>H</i>ouse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  mb-2 mb-lg-0"
              style={{direction:"rtl" , marginLeft:"auto"}}
            >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  الصفحة الرئيسية
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  المنتجات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  تواصل معنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
