import React from "react";
import "./css/About.css";
import NavBar from "../components/navbar";
import Img from "../static_Asset/Adewale.PNG";
import Tools from "./TOOLS";

import resume from "../static_Asset/Resume-Adewale.pdf";

const About = () => {
  return (
    <>
      <div>
        <NavBar pr="" hm="" ab="ab" ct="" />
      </div>
      <div className="about-container">
        <div className="about-top-section">
          <img src={Img} alt="adewale" className="about-img" />
          <span className="top-txt">Hi there, I am Adewale 👋</span>
          <div>
            <a href={resume} download="Adewale's Resume">
              <span className="loader-download"></span>
            </a>
          </div>
        </div>
        <div className="about-cont-2">
          <div>
            <div>
              <span className="brief-intro">Brief Introduction:</span>
              <p className="brief-ctn">
                I am a 23 yr old student of Electrical and Electronics
                Engineering at the University of Ilorin, Kwara State, expected
                to graduate in year 2023. I have keen interest in Technology at
                large with goal of creating solutions to numberous problems our
                society face daily.
              </p>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Education/Certification</th>
                    <th>Institution</th>
                    <th>Date of Graduation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.Eng, Electrical and Electronics Engineering</td>
                    <td>UNILORIN</td>
                    <td>present date - 2023</td>
                  </tr>
                  <tr>
                    <td>Cloud Developer Nanodegree</td>
                    <td>UDACITY</td>
                    <td>August 2022</td>
                  </tr>
                  <tr>
                    <td>Software Developer</td>
                    <td>ALX</td>
                    <td>July 2023</td>
                  </tr>
                  <tr>
                    <td>Cloud Developer</td>
                    <td>Google/Andela</td>
                    <td>December 2022</td>
                  </tr>
                  <tr>
                    <td>Beginner User Experience Design</td>
                    <td>Coursera</td>
                    <td>March 2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <span className="tools-txt">Tools</span>
            <div>
              <Tools />
            </div>
          </div>
          <div>
            <span className="tools-txt">Skills:</span>
            <div className="skills-section">
              <p>
                <b>*</b> Excellent communication skills
              </p>
              <p>
                <b>*</b> Excellent leadership skills
              </p>
              <p>
                <b>*</b> Fast learner
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
