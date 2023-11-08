// `app/page.js` is the UI for the `/` URL
// export default function HallOfFamePage() {
//     return <h1>Hello</h1>
//   }



  'use client'
  //hall of fame modal box code 
  'use strict'; 
  import React, { useState } from 'react';
  import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Text, useDisclosure } from "@chakra-ui/react";
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import Image from 'next/image';
  import projectsData from 'src/app/hall-of-fame/projectsData.json'; // Import the project data
  
  export default function HallOfFamePage({ onHideCarousel, onShowCarousel }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [selectedYear, setSelectedYear] = useState(2021);
  
    const handleOpen = () => {
      setIsButtonVisible(false);
      onOpen();
      if (onHideCarousel) onHideCarousel();
    };
  
    const handleClose = () => {
      setIsButtonVisible(true);
      onClose();
      if (onShowCarousel) onShowCarousel();
    };
  
    const handleYearButtonClick = (year) => {
      setSelectedYear(year);
      handleOpen();
    };
  
    const buttonStyles = {
      fontSize: '24px',
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
      boxSizing: 'border-box',
    };
  
    const projectsByYear = projectsData; // Use the imported project data
  
    return (
      <div>
        {isButtonVisible && (
          <>
            <Text fontSize="lg" mb={4} color="blue.500">
              The Hall of Fame showcases the best of the best. Click below to see our legendary champions.
            </Text>
          </>
        )}
  
        {/* Create buttons for years based on the available years in the data */}
        <div>
          {Object.keys(projectsByYear).map((year, index) => (
            <button
              key={year}
              style={{
                ...buttonStyles,
                marginBottom: index < Object.keys(projectsByYear).length - 1 ? '10px' : '0',
              }}
              onClick={() => handleYearButtonClick(year)}
            >
              Projects from {year}
            </button>
          ))}
        </div>
  
        <Modal isOpen={isOpen} onClose={handleClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" bg="green.500">HALL OF FAME</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Swiper
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {projectsByYear[selectedYear].map((project, index) => (
                  <SwiperSlide key={index}>
                    <Box p={4} bg="green.200" display="flex" justifyContent="center" alignItems="center">
                      {/* Display project details */}
                      <div style={{ marginRight: '30px', textAlign: 'center' }}>
                        <Image src="/temp.png" alt="Description of Image" width={100} height={100} />
                        <Text fontWeight="bold" mt={2}>{project.title}</Text>
                        <Text mt={2}>{project.description}</Text>
                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                          <Text color="blue.500" mt={2}>GitHub Link</Text>
                        </a>
                      </div>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
  