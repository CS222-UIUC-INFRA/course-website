'use client'
'use strict';
import React, { useState } from 'react'; 
import Slider from 'react-slick';
import Modal from 'react-modal'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  
  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Settings for your carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div padding="5%">
            <h1 fontSize="xl" fontWeight="semibold">COURSE DESCRIPTION</h1>
            <p mt={3}>
              This course is about...
            </p>
          </div>
        </div>
        <div>
          <div padding="5%">
            <h1 fontSize="xl" fontWeight="semibold">OFFICE HOURS</h1>
            <p mt={3}>
              Office hours...
            </p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* Button to trigger the modal */}
      <button onClick={() => setIsModalOpen(true)}>Open Course Overview</button>

      {/* Modal Box */}
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
      >
        <h2>CS222 Fall 2023</h2>
        <p>This is your modal content.</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default CarouselComponent;


/*

*/


// import React, { useState } from 'react'; 
// import Slider from 'react-slick';
// import Modal from 'react-modal'; 

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const App = () => {
  
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 2,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1200,
//   };

//   return (
//     <div>
//       <Slider {...sliderSettings}>
//         <div>
//           {/* Slide1 content here */}
//           <h2>Slide 1 Content</h2>
//           <p>This is content for slide 1...</p>
//         </div>
//         <div>
//           {/* Slide2 content here */}
//           <h2>Slide 2 Content</h2>
//           <p>This is content for slide 2...</p>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>

//       {/* Button to trigger the modal */}
//       <button onClick={() => setIsModalOpen(true)}>Open Course Overview</button>

//       {/* Modal Box */}
//       <Modal 
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         contentLabel="Course Overview"
//       >
//         <h2>CS222 Fall 2023</h2>
//         <p>This course is about...</p>
//         <button onClick={() => setIsModalOpen(false)}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default App;
