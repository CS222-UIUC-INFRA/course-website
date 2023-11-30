import React from 'react';
import Slider from "react-slick";

const CarouselComponent = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {images.map((img, idx) => (
                <div key={idx}>
                    <img src={img} alt={`slide-${idx}`} />
                </div>
            ))}
        </Slider>
    );
}

export default CarouselComponent;
