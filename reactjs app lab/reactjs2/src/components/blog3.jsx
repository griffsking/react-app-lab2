import React from "react";
import mike from './mike.jpg';

function Blog3() {
    return (
        <div className="blog1">
            <div class="colblog">
            <h1>Mike Tyson Punches Man on Plane</h1>
                    <img src={mike} width={100} height={100} alt="Mike Tyson" />
                    <div class="authordate">
                    <p>Written by: Mike Wazowski</p>
                    <p>Posted on: 4/22/22</p>
                    </div>
            <p style={{'padding-bottom': 170, 'padding-top': 50}}>
                Former heavyweight boxing champion 'Iron' Mike Tyson has reportedly punched a guy on an airplane. During the flight, Mikey was minding his own business when the man came from behind his seat and started verbally harrassing him. Mike, having more than enough of his crap, got up and struck the man repeatedly in the side of his head. All of this information comes from camera footage from the friend of the man, who recorded the harrassment and the savage beating. What do you think about the situation? If you want my take: the dude kinda deserved it tbh.
            </p>
            </div>
        </div>
      );
    }

export default Blog3;