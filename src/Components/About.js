import React from "react";
// import layers from "./images/browser.png";
// import cogwheel from "./images/browser.png";
// import pen from "./images/browser.png";

// import browser from "./images/browser.png";
// import myImage from "./images/browser.png";
// import PropTypes from "prop-types";
import Abdur from "./images/abdurrasheed.png";

export default class About extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="nav-wrapper">
          <div class="right-side">
            <div class="brand">Abdur-Rasheed Syed</div>
          </div>
        </div>

        <div class="content-wrapper">
          <div class="two-column-wrapper">
            <div class="profile-image-wrapper">
              <img src={Abdur} alt="myImage" />
            </div>

            <div className="profile-content-wrapper">
              <h1>Hi, this is a little about me.</h1>
              <p className="me">
                As a kid, I was very shy and undervalued my accomplishments. My
                insecurities got the best of me and kept me from many
                opportunities. While I knew I was not dumb, as evidenced by my
                high grades and awards, I didn’t see myself as an intelligent
                kid either. I preferred to keep to myself and wasn’t confident
                enough to participate in competitions. In high school when it
                came time for the SAT my self-doubt made me very nervous and as
                a result, I did not do as well as I would have liked; this
                further added to my insecurities as I struggled with the English
                portion. I always sold myself short and did not have any big
                goals in life. This all changed when it came time to apply to
                college; I realized that I had to stop being my own worst critic
                and stop being an obstacle for myself. I set a goal for myself
                to get into Macaulay Honors College and with hard work and
                dedication, on March 12th, 2019 I received a letter of
                acceptance. Getting into the Macaulay Honors program at Lehman
                College changed my life for the better. It made me aware of my
                capabilities and allowed me to grow as an individual. This was a
                great step for me as it made me realize I need to stop letting
                myself down and appreciate myself more. Additionally, it made me
                realize with dedication and hard work that I can accomplish
                anything I want. Currently, I am pursuing my passion for
                computers by majoring in computer science and I know that as
                long as I work hard I will be successful in my career. This
                accomplishment was an eye-opener to who I am and not what I
                thought I was. It taught me that I should never sell myself
                short and always work for what I want.
              </p>

              <p className="me">
                I created this website to let the world know about me, my
                passions, and the current projects I am working on. I believe no
                goal is to big to acccomplish. The sky is above me. The earth is
                below me. The fire is within me.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}