
'use client'
'use strict';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CourseCarousel() {
    const sections = [
        {
            title: 'COURSE DESCRIPTION',
            content: 'Design and implementation of novel software solutions. Problem identification and definition; idea generation and evaluation; and software implementation, testing, and deployment. Emphasizes software development best practices including framework selection, code review, documentation, appropriate library usage, project management, continuous integration and testing, and teamwork.'
        },
        {
            title: 'OFFICE HOURS',
            content: 'Your office hours content here.'
        },
        {
            title: 'CALENDAR',
            content: 'Your calendar content here.'
        },
        {
            title: 'Expectations',
            content: 'Your expectations content here.'
        },
        {
            title: 'Grading Policy',
            content: 'Your grading policy content here.'
        },
        {
            title: 'Plagiarism Policy',
            content: 'Your plagiarism policy content here.'
        },
        {
            title: 'Course Resources',
            content: 'Your course resources content here.'
        },
        {
            title: 'Mental Health',
            content: 'Your mental health content here.'
        },
        // Add more sections as needed...
    ];

    return (
        <div>
            {/* Title and Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                <h1 style={{color: 'darkblue'}}>CS222 Fall 2023</h1>
                <div>
                    <button style={{ marginRight: '10px' }}>Campuswire</button>
                    <button>Canvas</button>
                </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
            >
                {sections.map((section, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ padding: '20px' }}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
