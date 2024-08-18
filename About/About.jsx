import React, { useEffect } from 'react';
import Banner from '../Banner';
import ThemeBtn from '../ThemeBtn';

function About() {
  const AboutMsg = "About Us";

  useEffect(() => {
    const workSection = document.querySelector(".section-work-data");
    
    const workSectionObserve = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const counterNum = document.querySelectorAll(".counter-numbers");
      const speed = 200;

      counterNum.forEach((curNumber) => {
        const updateNumber = () => {
          const targetNumber = parseInt(curNumber.dataset.number);
          const initialNumber = parseInt(curNumber.innerText);

          const incrementNumber = Math.trunc((targetNumber / speed));

          if (initialNumber < targetNumber) {
            curNumber.innerText = `${initialNumber + incrementNumber}+`;
            setTimeout(updateNumber, 20);
          } else {
            curNumber.innerText = `${targetNumber}+`;
          }
        };

        updateNumber();
      });
    
    };
    const workSecObserver = new IntersectionObserver(workSectionObserve, {
      root: null,
      threshold: 0,
    });
    workSecObserver.observe(workSection);
  }, []);

  return (
    <>
      <ThemeBtn />
      <Banner ContactValue={AboutMsg} />
      <hr />
      <div className='flex justify-around items-center flex-wrap-reverse px-5 lg:px-0 gap-5 lg:gap-0 bg-[#f8f6f3] dark:bg-black py-5'>
        <div className='lg:w-[500px] lg:h-[400px] md:w-[80%] place-content-center flex flex-col gap-5'>
          <h2 className='font-bold text-4xl dark:text-white  selection:bg-[#8bc34a]'>
            Your Go-To Vehicle Rental Service.
          </h2>
          <p className='text-base dark:text-white text-[#333333]  selection:bg-[#8bc34a]'>
            At [Your Company Name], we believe in making your travel experience seamless and hassle-free. Whether you're looking to rent a car for a business trip, an e-scooter for city exploration, or a bike for an adventure, we've got you covered.
          </p>
          <p className='text-base dark:text-white  text-[#333333] selection:bg-[#8bc34a]'>
            Our diverse fleet of vehicles is carefully maintained to ensure your safety and comfort on the road. With easy booking options, competitive pricing, and exceptional customer service, we're committed to being your trusted partner on every journey.
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1682089468743-5a31e96f8dd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className='rounded md:w-auto lg:w-[580px] lg:h-[400px]'
          alt="Vehicle image"
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#001524] gap-5 py-10 font-semibold text-white section-work-data'>
        <div className='text-center'>
          <p className='text-base font-bold'>Our Achievements Speak for Themselves!</p>
        </div>
        <div className='text-center'>
          <p className='text-center text-3xl counter-numbers' data-number={'10000'}>
            0
          </p>
          <p className='text-base'>Satisfied Customers</p>
        </div>
        <div className='text-center'>
          <p className='text-3xl counter-numbers' data-number={'500'}>
            0
          </p>
          <p className='text-base'>Vehicles Available</p>
        </div>
        <div className='text-center'>
          <p className='text-center text-3xl counter-numbers' data-number={'500'}>
            0
          </p>
          <p className='text-base'>Rental Locations</p>
        </div>
      </div>

      
      <div className='bg-[#f8f6f3] dark:bg-[#121212] py-10'>
        <div className='container mx-auto px-5'>
          <h2 className='text-3xl font-bold text-center text-[#333333] dark:text-white mb-5'>
            Why Choose Us?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='p-5 border rounded-lg dark:border-gray-700'>
              <h3 className='text-xl font-bold mb-3 text-[#333333] dark:text-white'>Diverse Fleet</h3>
              <p className='text-base text-[#333333] dark:text-gray-400'>
                Choose from a wide range of vehicles including cars, bikes, e-scooters, and more to suit your needs and preferences.
              </p>
            </div>
            <div className='p-5 border rounded-lg dark:border-gray-700'>
              <h3 className='text-xl font-bold mb-3 text-[#333333] dark:text-white'>Affordable Pricing</h3>
              <p className='text-base text-[#333333] dark:text-gray-400'>
                We offer competitive rates without compromising on quality. Get the best deals for your journey.
              </p>
            </div>
            <div className='p-5 border rounded-lg dark:border-gray-700'>
              <h3 className='text-xl font-bold mb-3 text-[#333333] dark:text-white'>24/7 Customer Support</h3>
              <p className='text-base text-[#333333] dark:text-gray-400'>
                Our dedicated support team is always ready to assist you, ensuring a smooth and stress-free rental experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
