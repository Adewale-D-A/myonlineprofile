import React from "react";
import "./css/Tools.css";
import { ReactComponent as Discord } from "../static_Asset/icons/discord-brands.svg";
import { ReactComponent as Facebook } from "../static_Asset/icons/facebook-brands.svg";
import { ReactComponent as Bucket } from "../static_Asset/icons/iconmonstr-github-5.svg";
import { ReactComponent as Instagram } from "../static_Asset/icons/instagram-brands.svg";
import { ReactComponent as LinkedIn } from "../static_Asset/icons/linkedin-brands.svg";
import { ReactComponent as Slack } from "../static_Asset/icons/slack-brands.svg";
import { ReactComponent as Twitter } from "../static_Asset/icons/twitter-brands.svg";

const ContactIcons = () => {
  return (
    <>
      <div className="icon-bars">
        <div className="github-svg">
          <Discord />
        </div>
        <div className="github-svg">
          <Facebook />
        </div>
        <div className="github-svg">
          <a
            href="https://www.linkedin.com/in/adewale-azeez-0b02261b7/"
            target="blank"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="github-svg">
          <a href="https://github.com/Adewale-D-A" target="blank">
            <Bucket />
          </a>
        </div>
        <div className="github-svg">
          <Instagram />
        </div>
        <div className="github-svg">
          <Slack />
        </div>
        <div className="github-svg">
          <a href="https://twitter.com/SignatureName" target="blank">
            <Twitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactIcons;
