import React, { Component } from "react";
import resume from "./10-1-22 Abdur-Rasheed Syed Offical Resume.docx";
import resumepic from "./respic.png"

class Resume extends Component {
  render() {
    return (
      <div id="my-resume">
        <img src= {resumepic}/>
        <a href={resume} rel="noopener noreferrer" target="_blank">
          {" "}
          Download
        </a>
      </div>
    );
  }
}

export default Resume;