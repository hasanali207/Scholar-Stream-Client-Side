import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div className="">
      <Swiper
        className="rounded-2xl z-0"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay 
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src='https://i.ibb.co/BZs0sWp/7.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src="https://i.ibb.co/C8KCzNz/8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src="https://i.ibb.co/X3qxrRh/9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src="https://i.ibb.co/M7YJk7X/10.png" alt="" />
        </SwiperSlide>
      </Swiper>
     

      



      {/* <div className="absolute top-1/2 right-1/2 translate-x-1/2 z-30">
      <h1 className="bg-gradient-to-r text-center from-blue to-green font-extrabold text-5xl text-green text-transparent bg-clip-text">
        Wrold First Class Hotel <br></br> Mangrove Hotel
      </h1>
    </div> */}

    </div>
    
  );
};

export default Slider;
