import React from "react";
import gorj from './gorj.jpg';

function Blog2() {
    return (
        <div className="blog1">
            <div class="colblog">
            <h1>George Jetson Close to Being Born</h1>
                    <img src={gorj} width={100} height={100} alt="George Jetson" />
                    <div class="authordate">
                    <p>Written by: Walter White</p>
                    <p>Posted on: 4/22/22</p>
                    </div>
            <p style={{'padding-bottom': 170, 'padding-top': 50}}>
                Word about a certain man's arrival has been making it's rounds on the internet for the past few days. George Jetson: one of the main characters on the animated show The Jetsons, a father of two, and the husband of Jane Jetson. Fact-checkers claim to have discovered George's birthday: August 22, 2022. This would place the man's birth about four months from now. Of course, this is all simply speculation. There is no definitive proof that George Jetson will be born this coming August, but like with most things, we'll just have to wait and see.
            </p>
            </div>
        </div>
      );
    }

export default Blog2;