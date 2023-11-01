'use client'
//hall of fame modal box code 
'use strict'; 
import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Text, useDisclosure } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function HallOfFameComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleOpen = () => {
        setIsButtonVisible(false);
        onOpen();
    };

    const handleClose = () => {
        setIsButtonVisible(true);
        onClose();
    };

    const buttonStyles = {
        fontSize: '24px', // 2xl size
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <div>
        {isButtonVisible && (
            <>

                <button style={buttonStyles} onClick={handleOpen}>
                    Open Hall of Fame
                </button>
                <Text fontSize="lg" mb={4} color="blue.500"> 
                    The Hall of Fame showcases the best of the best. Click below to see our legendary champions.
                </Text>
            </>
        )}

            <Modal isOpen={isOpen} onClose={handleClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader textAlign="center" bg="red.500">HALL OF FAME</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Swiper
                            navigation
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <Box p={4} bg="green.200">
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                </div>

                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box p={4} bg="yellow.200">
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box p={4} bg="blue.200">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                    <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                    <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                    </div>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box p={4} bg="red.200">
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                <Image src="/temp.png" alt="Description of Image" width={100} height={100} style={{ marginRight: '200px' }} />
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}