import React, {useContext} from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Send Message" href="https://us3.list-manage.com/contact-form?u=9e984b49266ab372d18d87283&form_id=36b5d8c85665ee08a9af7a3f7b8fbfd5" />
                <Button text="Hire Me" href="https://www.fiverr.com/ryandevv" />
              </div>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/mygreeting.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
