'use client'
'use strict';
import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from "@chakra-ui/react";
import Image from 'next/image';
import projectsData from 'src/app/hall-of-fame/projectsData.json';

export default function HallOfFamePage() {

  const [visibleYears, setVisibleYears] = useState(new Set(Object.keys(projectsData)));
  const [currentProjectIndices, setCurrentProjectIndices] = useState([0, 1]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const newTimer = setInterval(() => {
      setCurrentProjectIndices(prevIndices => [
        (prevIndices[0] + 1) % 3,
        (prevIndices[1] + 1) % 3
      ]);
      setCurrentColorIndex(prevColorIndex => (prevColorIndex + 1) % 2);
    }, 5000);

    setTimer(newTimer);

    return () => {
      clearInterval(newTimer);
    };
  }, []);

  const toggleYearVisibility = (year) => {
    setVisibleYears(prevYears => {
      const newVisibleYears = new Set(prevYears);
      if (newVisibleYears.has(year)) {
        newVisibleYears.delete(year);
      } else {
        newVisibleYears.add(year);
      }
      return newVisibleYears;
    });
  };

  const orderedYears = ['2023', '2022', '2021', '2020'];

  const cardColors = ['lightblue', 'orange'];
  const cardWidth = 'calc(50% - 20px)';

  const hallOfFameButtonStyles = {
    fontSize: '30px',
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const centeredContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const yearButtonStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const navigateProject = (direction) => {
    clearInterval(timer); // Reset the timer
    setTimer(setInterval(() => {
      setCurrentProjectIndices(prevIndices => [
        (prevIndices[0] + 1) % 3,
        (prevIndices[1] + 1) % 3
      ]);
      setCurrentColorIndex(prevColorIndex => (prevColorIndex + 1) % 2);
    }, 5000)); // Start a new timer

    setCurrentProjectIndices(prevIndices => {
      if (direction === 'left') {
        return prevIndices.map(index => (index - 1 + 3) % 3);
      } else {
        return prevIndices.map(index => (index + 1) % 3);
      }
    });
  };

  return (
    <div>
      <Button style={hallOfFameButtonStyles}>
        Hall of Fame
      </Button>
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Explore our projects by year
      </Text>

      {orderedYears.map((year) => (
        <div key={year}>
          <button
            style={yearButtonStyles}
            onClick={() => toggleYearVisibility(year)}
          >
            Projects from {year}
          </button>

          {visibleYears.has(year) && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => navigateProject('left')}>&lt;</Button>
              {currentProjectIndices.map((currentIndex, index) => (
                <div key={index} style={{ flex: '1', maxWidth: cardWidth, marginRight: '20px' }}>
                  <Box p={4} bg={cardColors[currentColorIndex]} my={2}>
                    <div style={{ textAlign: 'center' }}>
                      <Image src="/temp.png" alt="Project Image" width={100} height={100} />
                      <Text fontWeight="bold" mt={2}>{projectsData[year][currentIndex].title}</Text>
                      <Text mt={2}>{projectsData[year][currentIndex].description}</Text>
                      <a href={projectsData[year][currentIndex].githubLink} target="_blank" rel="noreferrer">
                        <Text color="blue.500" mt={2}>GitHub Link</Text>
                      </a>
                    </div>
                  </Box>
                </div>
              ))}
              <Button onClick={() => navigateProject('right')}>&gt;</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
