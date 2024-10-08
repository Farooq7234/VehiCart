import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import TotalCalculator from '../TotalCalculator';
import logo from '../../../public/Logo.png'

const Header = ({ image }) => {
  const authStatus = useSelector(state => state.auth.status);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();


  const totalQuantity = cartItems.reduce((total, item) => {
    if (typeof item.quantity !== 'number') {
      throw new Error('Item quantity should be a number');
    }
    return total + item.quantity;
  }, 0);


  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogoClick = () => {
    navigate('/');
  };




  return (
    <>
      <div className='fixed w-full dark:bg-black bg-white h-20 flex justify-between items-center shadow-md px-3 z-40'>

        <ul className='flex justify-between items-center sm:gap-5 lg:gap-10'>
          <img src={logo} className=' h-12 dark:text-white cursor-pointer' alt='Logo' onClick={handleLogoClick} />
          {['Everything', 'Cars', 'Bikes'].map((category, index) => (
            <li key={index} className='dark:text-white text-lg cursor-pointer font-normal text-black hover:text-[#fd4545] font-sans'>
              <NavLink to={`/${category.toLowerCase()}`} className={({ isActive }) => `duration-200 max-md:hidden ${isActive ? 'text-[#fd4545] ' : 'text-gray-700 dark:text-white dark:hover:text-[#fd4545]'}  lg:hover:bg-transparent lg:border-0 hover:text-[#fd4545] lg:p-0`}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className='flex justify-around items-center gap-2 sm:gap-5 lg:gap-10'>
          <li className='text-lg cursor-pointer font-medium text-black hover:text-[#fd4545] font-sans dark:text-white max-md:hidden'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='text-lg cursor-pointer font-medium text-black hover:text-[#fd4545] font-sans dark:text-white max-md:hidden'>
            <NavLink to='/contactus'>Contact Us </NavLink>
          </li>
          <TotalCalculator />
          <li className='cursor-pointer text-[#fd4545] font-sans'>
            <NavLink to='/cart' className='flex'>
              <RiShoppingBasketFill className='text-2xl' />
              <sup className='bg-[#fd4545] px-2 py-1 rounded-full text-white text-xs font-semibold animate-bounce'>{totalQuantity || 0}</sup>
            </NavLink>
          </li>
          <svg className='dark:text-white sm:hidden max-sm:visible w-8 h-7  text-white max-sm:bg-[#fd4545]  p-1 rounded cursor-pointer' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' onClick={toggleSidebar}>
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>
          <div className='max-sm:hidden'>
            {
              authStatus === true ?
              (<LogoutBtn />)
              :
              (<Link
                className='bg-[#000] px-6 py-2 rounded-md text-white'
                to='/login'>Login</Link>)
            }
          </div>
        </ul>

        {sidebarVisible && (
          <div className='fixed top-0 left-0 h-full  w-[70%] z-10 bg-gray-100 dark:bg-black sm:hidden'>
            <ul className='flex justify-around flex-col items-center h-1/2 pt-5' onClick={toggleSidebar}>

              {['Home', 'Everything', 'Cars', 'Bikes', 'ContactUs'].map((link, index) => (
                <li key={index} className='w-full py-2 text-lg text-center hover:bg-[#fd4545] dark:text-white'>
                  <NavLink to={index === 0 ? '/' : `/${link.toLowerCase()}`} className={`px-${index === 0 ? '20' : '14'} py-3`}>{link}</NavLink>
                </li>
              ))}
              {
                authStatus === false ?
                  (<Link
                    className='bg-[#fd4545] px-6 py-2 rounded-full text-white'
                    to='/login'>Login</Link>)
                  :
                  (<LogoutBtn />)
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
