import React from "react";
import { Button } from "./Button";
import check11 from "./check-1-1.svg";
import iconBg2 from "./icon-bg-2.svg";
import iconBg3 from "./icon-bg-3.svg";
import iconBg from "./icon-bg.svg";
import image from "./image.svg";
import logos from "./logos.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector from "./vector.svg";

export const Hero = () => {
  return (
    <div className="hero">
      <header className="header">
        <div className="logo">
          <img className="check" alt="Check" src={check11} />

          <div className="div">Job Portal</div>
        </div>

        <div className="menu">
          <div className="text">
            <div className="text-wrapper-2">Home</div>
          </div>

          <div className="text">
            <div className="text-wrapper-3">Jobs</div>
          </div>

          <div className="text">
            <div className="text-wrapper-3">About Us</div>
          </div>

          <div className="text">
            <div className="text-wrapper-3">Contact Us</div>
          </div>
        </div>

        <div className="buttons">
          <div className="text-wrapper-4">Login</div>

          <Button className="button-instance" />
        </div>
      </header>

      <div className="text-inputs-icons">
        <div className="text-inputs">
          <div className="div-wrapper">
            <div className="text-2">
              <p className="p">Find Your Dream Job Today!</p>

              <p className="text-wrapper-5">
                Connecting Talent with Opportunity: Your Gateway to Career
                Success
              </p>
            </div>
          </div>

          <div className="search">
            <div className="text-icons-bg">
              <div className="text-icons">
                <div className="text-3">
                  <div className="text-wrapper-6">Job Title or Company</div>
                </div>

                <div className="text-icon">
                  <div className="text-wrapper-7">Select Location</div>

                  <div className="chevron-down">
                    <img className="vector" alt="Vector" src={vector} />
                  </div>
                </div>

                <div className="text-icon-2">
                  <div className="text-wrapper-7">Select Category</div>

                  <div className="chevron-down">
                    <img className="vector" alt="Vector" src={image} />
                  </div>
                </div>
              </div>
            </div>

            <button className="button-2">
              <div className="search-2">
                <img className="img" alt="Vector" src={vector2} />

                <img className="vector-2" alt="Vector" src={vector3} />
              </div>

              <div className="text-wrapper-8">Search Job</div>
            </button>
          </div>
        </div>

        <div className="icons-text">
          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={iconBg} />

            <div className="text-2">
              <div className="text-wrapper-9">25,850</div>

              <div className="text-wrapper-10">Jobs</div>
            </div>
          </div>

          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={iconBg2} />

            <div className="text-2">
              <div className="text-wrapper-9">10,250</div>

              <div className="text-wrapper-10">Candidates</div>
            </div>
          </div>

          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={iconBg3} />

            <div className="text-2">
              <div className="text-wrapper-9">18,400</div>

              <div className="text-wrapper-10">Companies</div>
            </div>
          </div>
        </div>
      </div>

      <img className="logos" alt="Logos" src={logos} />
    </div>
  );
};
