import React from "react";
import "./team.css";
import { NavLink } from "react-router-dom";
import gallery_contnet from "../../Data/gallery-list";
import department_contnet from "../../Data/deparment-list";

export default function Team() {
  return (
    <div className="mainbody_team">
      <div className="about-department">
        <div className="about-title-body">
          <h1 className="about-subheading about-subheading2">
            WHO WE ARE AND WHY WE ARE DOING THIS
          </h1>
          <div className="about-seperator2">
            <div className="about-title-line1"></div>
            <div>
              <h1 className="about-heading about-heading2">OUR DEPARTMENTS</h1>
            </div>
            <div className="about-title-line2"></div>
          </div>
          <div className="about-department-grid">

            {department_contnet.map((card) => {
              return (

                <NavLink
                  className="about-department-link"
                  aria-current="page"
                  to={card.topage}
                >
                  <article className="about-department-grid-box flow bg-black text-neutral-100 border-primary-400">
                    <div className="about-department-title-body">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="about-department-icon"
                        alt="progdep"
                        src={card.imgURL}
                      />
                      <p className="about-department-heading">{card.dep_name}</p>
                    </div>
                    <div className="about-department-text">
                      <p className="dep_para">
                        {card.content}
                      </p>
                    </div>
                    <NavLink
                    activeClassName="active"
                    className="dep-link"
                    aria-current="page"
                    to="/project"
                  >
                    <button className="dep-button">
                      View Department<span className="arrow">&rarr;</span>
                    </button>
                  </NavLink>
                  </article>
                  
                </NavLink>
              );
            }
            )
            }
          </div>
        </div>
      </div>


      <div className="gallery-section">
      <h1 className="dep-subheading">
            WHO WE ARE AND WHY WE ARE DOING THIS
      </h1>
        <div className="about-seperator3">
          <div className="about-title-line1">
          
          </div>
          <div>
            <h1 className="about-heading about-heading3">OUR MEMORIES</h1>
          </div>
          <div className="about-title-line2"></div>
        </div>


        <div className="container">
        {gallery_contnet.map((card2) => {
              return (
                <div className="image_main_container">
            
            <div className="team_robo_pic">
              <img
                loading="lazy"
                decoding="async"
                className="img1"
                src={card2.imgURL}
                alt=""
              />
              <h3 className="imageheading">{card2.photo_name}</h3>
            </div>
          </div>
              )})}
        </div>
      </div>
    </div>
  );
}
