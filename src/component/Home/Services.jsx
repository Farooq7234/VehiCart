import React from 'react';
import { FaWrench, FaCheckCircle, FaDollarSign, FaUndoAlt } from 'react-icons/fa';
import { serviceData } from '.././mockData.js';

function Service() {
  // Mapping the icons to the corresponding service data
  const icons = [
    <FaWrench key="maintenance" />,
    <FaCheckCircle key="verified" />,
    <FaDollarSign key="pricing" />,
    <FaUndoAlt key="cancellation" />
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center bg-black'>
      {serviceData.map((data, index) => (
        <div className='h-40 flex justify-around items-center' key={index}>
          <div className='text-xl flex flex-col justify-center items-center w-[300px] lg:w-[250px] bg-[#333333] text-white rounded h-32'>
            <div className="text-4xl mb-2">
              {icons[index]} {/* Render the corresponding icon */}
            </div>
            <div className='font-semibold text-center'>{data.value1}</div>
            <h2 className='text-center text-lg'>{data.value2}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
