'use client'
'use strict';

import React, { useState } from 'react';
import CourseCarousel from './CourseCarousel.js'; 
import HallOfFameComponent from './hof.js'; 

export default function MainPage() {
    const [showCourseCarousel, setShowCourseCarousel] = useState(true);

    const hideCourseCarousel = () => {
        setShowCourseCarousel(false);
    };

    const showCourseCarouselAgain = () => {
        setShowCourseCarousel(true);
    };

    return (
        <div>
            {showCourseCarousel && <CourseCarousel />}
            <HallOfFameComponent onHideCarousel={hideCourseCarousel} onShowCarousel={showCourseCarouselAgain} />
        </div>
    );
}
