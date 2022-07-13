import React from "react";
import NavBar from "../components/navbar";
import "./css/HomePage.css";
import Typical from "react-typical";
import { ReactComponent as MedalIcon } from "../static_Asset/icons/medal-solid.svg";
import Tools from "./TOOLS";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <div>
          <NavBar pr="" hm="hm" ab="" ct="" />
        </div>
        <div className="main-ctn">
          <div className="welcome-ctn">
            <div className="wcm-mge">
              <h4>Welcome to my personal online profile</h4>
            </div>
            <div className="solid-line"></div>
            <div className="cet-info">
              <div className="typify-element">
                <p>
                  I am a
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      " FrontEnd Web Developer",
                      5000,
                      " UI Designer",
                      5000,
                    ]}
                  />
                </p>
              </div>
              <div className="cert-ctn">
                <div className="cert-item">
                  <div className="cert-1">
                    <div className="award-icon">
                      <MedalIcon />
                    </div>
                  </div>
                  <div className="cert-info">
                    <p>Udacity Cloud Dev Nanodegree</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-1">
                    <div className="award-icon">
                      <MedalIcon />
                    </div>
                  </div>
                  <div className="cert-info">
                    <p>Coursera Introduction to UX</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-btm-cnt">
        <div className="home-sde-img"></div>
        <div className="home-sde-txt">
          <div>
            <p>
              I am Adewale Damilare Azeez, I am currently frontend web developer
              for SociaLiga with skills in web framework tools like ReatJs,
              Javascript, HTML and CSS. I also have other skills which I just
              love to play with in my spare time like Figma for UI designs,
              CorelDraw for Graphics Design, Photoshop, Python programming
              language just to name a few.
            </p>
          </div>
          <div>
            <Tools />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
