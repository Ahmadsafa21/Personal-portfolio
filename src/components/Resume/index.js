import React from 'react';
import resumeImage from '../../assets/images/resume-image.jpg'; // Ensure path is correct

import Loader from 'react-loaders'
import './index.scss'

const Resume = () => {
return(
  <>
  <div className="resume-container">
    <div className="resume-text">
    Resume as of {" "}
    <span >
      {`${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()}`}
    </span>
    </div>

    <img
      src={resumeImage}
      alt="Resume"
      style={{
        width: '100%', // Full width within container
        height: 'auto', // Auto height to maintain aspect ratio
        objectFit: 'contain'
      }}
    />
  </div>
  <Loader type="ball-clip-rotate-multiple" />
  </>
)
};

export default Resume;
