import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const tour = [
  { image: "https://www.holidify.com/images/bgImages/ELLA.jpg", label: "Ella Scenic View" },
  { image: "https://media.holidify.com/images/bgImages/WELIGAMA.jpg", label: "Weligama Beach" },
  { image: "https://lp-cms-production.imgix.net/2024-08/-CantoiStock-1285881901-RFC.jpg?w=1440&h=810&fit=crop&auto=format&q=75", label: "Cultural Site in Sri Lanka" },
  { image: "https://www.tripsavvy.com/thmb/WrSackClVQtVepvo_4YZkh1cEaI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/drone-photo-of-colombo-city--sri-lanka-824079764-6aae9b4d6ad44baf890faa31f2e4b11e.jpg", label: "Colombo City Skyline" },
  { image: "https://www.tripsavvy.com/thmb/20TsznxhuzvNFmtIkffrdOeVQm4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aerial-view-of-sigiriya-rock-at-misty-morning--sri-lanka--drone-photo--1129567907-a6628ce7d636462f9a0e0361a3808178.jpg", label: "Sigiriya Rock Fortress" },
];



const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <Carousel
        autoPlay={true}
        animation="fade"
        interval={2000}
        indicators={true}
      >
        {tour.map((url, index) => (
          <Paper key={index} className="w-full h-full">
            <div className="w-screen h-screen">
              <img
                src={url.image}
                className="w-full h-full object-cover"
              />
              <p className="absolute top-40 left-4 text-white text-6xl font-extrabold">
                {url.label}
              </p>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;