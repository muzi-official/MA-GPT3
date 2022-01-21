import React, { useContext } from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./Footer.css";
import TopButton from "../topbutton/Top";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          darkMode
            ? "gpt3__footer section__padding"
            : "gpt3__footer-light section__padding"
        }
      >
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
        </div>

        <div
          className={darkMode ? "gpt3__footer-btn" : "gpt3__footer-btn-light"}
        >
          <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
          <div
            className={
              darkMode
                ? "gpt3__footer-links_logo"
                : "gpt3__footer-links_logo-light"
            }
          >
            {darkMode ? (
              <img src={gpt3Logo} alt="gpt3_logo" />
            ) : (
              <h1 style={{ color: "rgb(39, 35, 35)", marginTop: "10px" }}>
                MA GPT-3
              </h1>
            )}

            <p>@2022 MA GPT-3, All Rights Reserved</p>
          </div>
          <div
            className={
              darkMode
                ? "gpt3__footer-links_div"
                : "gpt3__footer-links_div-light"
            }
          >
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div
            className={
              darkMode
                ? "gpt3__footer-links_div"
                : "gpt3__footer-links_div-light"
            }
          >
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div
            className={
              darkMode
                ? "gpt3__footer-links_div"
                : "gpt3__footer-links_div-light"
            }
          >
            <h4>Get in touch</h4>
            <p>Karachi Pakistan</p>
            <p>03151194431</p>
            <p>syedmuzammilashfaque@gmail.com</p>
          </div>
        </div>

        <div
          className={
            darkMode ? "gpt3__footer-copyright" : "gpt3__footer-copyright-light"
          }
        >
          <p>@2022 MA GPT-3. All rights reserved.</p>
          <div className="Upperbtn">
            <TopButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
