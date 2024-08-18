import React, { useState, useEffect } from 'react';
import ActionButton from '../ActionButton';
import ThemeBtn from '../ThemeBtn';

function Hero() {
  const [text, setText] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const fullTexts = ['E-Scooters', 'Bikes', 'Cars', 'Bicycles'];
  const typingSpeed = 50;
  const pauseBeforeDeletion = 1000;
  const deletionSpeed = 50;

  const images = [
    'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13ce30015d78e755c/view?project=66c0e45b0025da8c44ea&mode=admin',
    'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13dfb001ee82e7c38/view?project=66c0e45b0025da8c44ea&mode=admin',
    'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13c3c000410d2eaa1/view?project=66c0e45b0025da8c44ea&mode=admin'
  ];
  const imageChangeInterval = 5000; // 5 seconds

  useEffect(() => {
    let isMounted = true;

    const typeEffect = async () => {
      while (isMounted) {
        for (let j = 0; isMounted && j < fullTexts.length; j++) {
          const fullText = fullTexts[j];

          // Typing
          for (let i = 0; isMounted && i <= fullText.length; i++) {
            setText(fullText.substring(0, i));
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
          }

          // Pause before deletion
          await new Promise((resolve) => setTimeout(resolve, pauseBeforeDeletion));

          // Deleting
          for (let i = fullText.length; isMounted && i >= 0; i--) {
            setText(fullText.substring(0, i));
            await new Promise((resolve) => setTimeout(resolve, deletionSpeed));
          }
        }
      }
    };

    typeEffect();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageChangeInterval);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <ThemeBtn />
      <div className="dark:bg-black flex justify-around items-center flex-wrap-reverse overflow-hidden pt-24">
        {/* Image Carousel */}
        <div className="relative w-[300px] sm:w-[300px] lg:w-[600px] lg:h-[500px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === imageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDuration: '1s' }}
            />
          ))}
        </div>

        {/* Left side of Hero section */}
        <div className="sm:w-[600px] flex flex-col gap-5 justify-center items-center dark:text-white">
          <h2 className="font-semibold text-xl font-sans text-center">
            Find Your Perfect Ride
          </h2>
          <h2 className="h-8 type-effect text-center text-2xl sm:text-3xl font-serif font-bold">
            {text}
          </h2>
          <p className="text-sm sm:text-base text-center">
            Whether you're zipping through the city or taking a weekend getaway, we've got the perfect ride for you.
          </p>
          <ActionButton />
        </div>
      </div>
    </>
  );
}

export default Hero;
