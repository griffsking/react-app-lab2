import React from "react";
import { NavLink } from "react-router-dom";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Navigation() {
  return (
    <div className="navigation">
     <div class="colaside">
                <h1>Navigation</h1>
                <aside>
                <nav>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                </nav>
                <h1>Twitter</h1>
                </aside>
                <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets - Curated tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}/>
  </div>
  </div>
  );
}

export default Navigation;