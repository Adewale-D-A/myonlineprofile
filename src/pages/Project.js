import React from "react";
import "./css/ProjectPage.css";
import NavBar from "../components/navbar";

import image1 from "../static_Asset/projectImg/Ui-designs/1-InterfaceHD.png";
import image2 from "../static_Asset/projectImg/Ui-designs/2-InterfaceHD.png";
import image3 from "../static_Asset/projectImg/Ui-designs/3-InterfaceHD.png";
import image4 from "../static_Asset/projectImg/Ui-designs/4-InterfaceHD.png";
import image5 from "../static_Asset/projectImg/Ui-designs/5-InterfaceHD.png";
import image6 from "../static_Asset/projectImg/Ui-designs/6-InterfaceHD.png";
import image7 from "../static_Asset/projectImg/Ui-designs/All1.png";
import image8 from "../static_Asset/projectImg/Ui-designs/All2.png";
import webPage1 from "../static_Asset/projectImg/web-designs/cityInformant.png";
import webPage2 from "../static_Asset/projectImg/web-designs/fuidConcept.png";
import webPage3 from "../static_Asset/projectImg/web-designs/fuidConcept3.png";
import Graphics1 from "../static_Asset/projectImg/graphics/Ajoke'sfINALDesign.jpg";
import Graphics2 from "../static_Asset/projectImg/graphics/AlienCodes1.jpg";
import Graphics3 from "../static_Asset/projectImg/graphics/BeauteousEffectMakeupDesing.jpg";
import Graphics4 from "../static_Asset/projectImg/graphics/Crystalwears2.jpg";
import Graphics5 from "../static_Asset/projectImg/graphics/wallpaper2.jpg";
import Graphics6 from "../static_Asset/projectImg/graphics/MusicCoverArt.jpg";

const ProjectPage = () => {
  return (
    <>
      <div className="pr-back-img">
        <div>
          <NavBar pr="pr" hm="" ab="" ct="" />
        </div>
        <div className="project-main-content">
          <div className="item-main-cont-1">
            <div className="web-dev">
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>City Informant</h3>{" "}
                  <a href="https://city-informant.netlify.app/" target="blank">
                    Open
                  </a>
                  <img src={webPage1} alt="UI face" className="web-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Fuid Concept</h3>{" "}
                  <a
                    href="https://dreambite.netlify.app/fuid%20concept%20page"
                    target="blank"
                  >
                    Open
                  </a>
                  <img src={webPage2} alt="UI face" className="web-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Fuid Concept</h3>{" "}
                  <a
                    href="https://dreambite.netlify.app/beauteous%20effect%20%20page"
                    target="blank"
                  >
                    Open
                  </a>
                  <img src={webPage3} alt="UI face" className="web-images" />
                </div>
              </div>
            </div>
            <div className="web-dev">
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 1</h3>
                  <img src={image1} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 2</h3>
                  <img src={image2} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 3</h3>
                  <img src={image3} alt="UI face" className="ui-images" />
                </div>
              </div>

              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 4</h3>
                  <img src={image4} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 5</h3>
                  <img src={image5} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 6</h3>
                  <img src={image6} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 7</h3>
                  <img src={image7} alt="UI face" className="ui-images" />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Mobile Design 8</h3>
                  <img src={image8} alt="UI face" className="ui-images" />
                </div>
              </div>
            </div>
            <div className="web-dev">
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Makeup graphics </h3>
                  <img
                    src={Graphics1}
                    alt="Ajoke's Graphics"
                    className="graphics-images"
                  />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>AlienCode Graphics</h3>
                  <img
                    src={Graphics2}
                    alt="AlienCode"
                    className="graphics-images"
                  />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Beauteous Effect Graphics</h3>
                  <img
                    src={Graphics3}
                    alt="Beauteous Effect Graphics"
                    className="graphics-images"
                  />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Crystal Wears</h3>
                  <img
                    src={Graphics4}
                    alt="Crystal Wears"
                    className="graphics-images"
                  />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>WallPaper Design</h3>
                  <img
                    src={Graphics5}
                    alt="Adewale's wallpaper"
                    className="graphics-images"
                  />
                </div>
              </div>
              <div className="web-ctn">
                <div className="web-dev-ctn">
                  <h3>Music Art</h3>
                  <img
                    src={Graphics6}
                    alt="Music Art Cover"
                    className="graphics-images"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="side-bar-main-ctn">
            <div className="side-bar-txt">
              <p>
                W<br />E<br />B<br /> <br />P<br />R<br />O<br />J<br />E<br />C
                <br />T
                <br />S
              </p>
            </div>
            <div className="side-bar-txt">
              {" "}
              <p>
                U<br />I<br />
                <br />D<br />E<br />S<br />I<br />G<br />N<br />S<br />
              </p>
            </div>
            <div className="side-bar-txt">
              <p>
                G<br />R<br />A<br />P<br />H<br />I<br />C<br />S<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
