import React from "react";
import sual from './sual.jpg';

function Blog1() {
  return (
    <div className="blog1">
        <div class="colblog">
        <h1>Saul Goodman Commits Tax Fraud</h1>
                <img src={sual} width={100} height={100} alt="Sual Goodman" />
                <div class="authordate">
                <p>Written by: Saul Goodman</p>
                <p>Posted on: 4/22/89</p>
                </div>
        <p style={{'padding-bottom': 170, 'padding-top': 50}}>
        Saul Goodman has been (allegedly) accussed of committing tax fraud. He was arrested on Monday, July 7, and is currently incarcinated at Oregon private prison. However, other sources claim that the suppossed culprit isn't actually in said prison, but rather a dummy. This is because Saul Goodman is an innocent man, who would never do anything to anyone, and has a burning hatred for the IRS. Who knows if Saul will ever pay his taxes?
        </p>
        </div>
    </div>
  );
}

export default Blog1;