import { FaShoppingCart } from "react-icons/fa"


function ActionButton() {
 
  return (
    <>
      <button className='bg-[#fd4545] hover:bg-[#fd4545] capitalize w-28 sm:w-40 h-10 flex justify-center items-center text-sm sm:text-base gap-2 text-white rounded-md'> <FaShoppingCart/>  Book Now</button>
    </>
  )
}

export default ActionButton