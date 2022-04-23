import React from "react";
import { NavLink } from "react-router-dom";
import sual from './sual.jpg';
import gorj from './gorj.jpg';
import mike from './mike.jpg';





function Home() {
    return (
        <div className="Home">
          <div class="header">
             <h1 style={{textAlign: "center"}}>Home</h1>
            </div>
            <div class="colblog">
            <h1 style={{height: 30}}>
            <NavLink className="nav-link" to="/blog1">
                  Saul Goodman Commits Tax Fraud
                </NavLink>
                </h1>
                <img src={sual} width={100} height={100} alt="Sual Goodman" />
                <div class="summary">
                <p>"And I'll do it again"</p>
                </div>
                <div class="authordate">
                <p>Written by: Saul Goodman</p>
                <p>Posted on: 4/22/89</p>
                </div>
                <h1 style={{height: 30}}>
            <NavLink className="nav-link" to="/blog2">
                  George Jetson Close to Being Born
                </NavLink>
                </h1>
                <img src={gorj} width={100} height={100} alt="George Jetson" />
                <div class="summary">
                <p>Our lord and savior will be with us soon</p>
                </div>
                <div class="authordate">
                <p>Written by: Walter White</p>
                <p>Posted on: 4/22/22</p>
                </div>
                <h1 style={{height: 30}}>
            <NavLink className="nav-link" to="/blog3">
                  Mike Tyson Punches Man on Plane
                </NavLink>
                </h1>
                <img src={mike} width={100} height={100} alt="Mike Tyson" />
                <div class="summary">
                <p>Looks like his boxing career is taking off again: just like the plane</p>
                </div>
                <div class="authordate">
                <p>Written by: Mike Wazowski</p>
                <p>Posted on: 4/22/22</p>
                </div>
            </div>
          </div>
      );
    }

export default Home;