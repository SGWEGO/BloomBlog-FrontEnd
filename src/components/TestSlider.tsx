import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="test-slider">
            <Slider {...settings}>
                <div>
                    <img src="http://localhost:9000/bloomblog-images/%E6%88%AA%E5%B1%8F2024-11-23%2016.44.44.png" alt="Test Image 1" />
                </div>
                <div>
                    <img src="http://localhost:9000/bloomblog-images/%E6%88%AA%E5%B1%8F2024-11-23%2016.44.44.png" alt="Test Image 2" />
                </div>
            </Slider>
        </div>
    );
};

export default TestSlider;
