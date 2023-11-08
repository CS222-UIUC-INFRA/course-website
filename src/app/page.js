'use client'
'use strict';

import React, { useState } from 'react';
import CourseCarousel from './CourseCarousel.js'; 
import HallOfFamePage from '/Users/vedangbhargava/course-website/src/app/hall-of-fame/page.js';


export default function MainPage() {
  const [showCourseCarousel, setShowCourseCarousel] = useState(true);

  const hideCourseCarousel = () => {
    setShowCourseCarousel(false);
  };

  const showCourseCarouselAgain = () => {
    setShowCourseCarousel(true);
  };

  const redirectToHallOfFame = () => {
    // Redirect to the /hall-of-fame route when the button is clicked
    window.location.href = '/hall-of-fame';
  };

  const buttonStyles = {
    fontSize: '24px',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <div>
      {showCourseCarousel && <CourseCarousel />}
      <button style={buttonStyles} onClick={redirectToHallOfFame}>
        Open Hall of Fame
      </button>
    </div>
  );
}








