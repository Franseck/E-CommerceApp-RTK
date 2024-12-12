import Cart from "./Cart"
import logo from "../assets/Logo.png"
import React, { useState } from "react";
import { useSelector } from "react-redux";



const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  //const user = useSelector((state) => state.user.user);
  //const { name, image } = user;
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{setOpen(true)};

  return (
    <div>
      <div className='bg-black p-3 w-full'>
        <h3 className='text-white font-girl text-3xl font bold tracking-wider leading-none text-center'> SECKIN VINTAGE STORE 
        </h3>
      </div>
<div className='flex justify-around items-center'>
<div>  
  <img src={logo} alt="logo" className='logo h-24 w-full rounded-2xl'/>
</div>
<div className='flex flex-row items-center gap-5'>
  <div className='flex flex-row items-center'>
  <button className=' font-girl text-md font bold leading-none text-center'>Logout</button>
    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 2 16 24" 
  strokeWidth="1.5" 
  stroke="currentColor" 
  className="size-5">
  <path strokeLinecap="round" 
  strokeLinejoin="round" 
  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
</div>
<div className='flex items-center text-center cursor-pointer'>
<p className='ml-3 font-girl text-md font bold leading-none text-center'>Wish List</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 16 20" fill="currentColor" className="size-5">
  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
</svg>
  </div>
  
  <div onClick={handleOpen} className='flex items-center text-center cursor-pointer' >
  {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
   
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 15 20" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
</svg>
            )}
 <p className='ml-3 font-girl text-md font bold leading-none text-center '>Shopping Cart</p>
<div>
         {open && <Cart openModal={open} setOpen={setOpen}/>}
            </div>
  </div>
  <div className="flex flex-row items-center cursor-pointer pl-4">
  
   

          </div>

</div>
</div>
<div className='bg-black p-4 flex justify-around'>
<div  className='text-white font-girl text-md font bold tracking-wider leading-none text-center'>
Free Shipping and Returns
</div>
<div  className='text-white font-girl text-md font bold tracking-wider leading-none text-center'>
%50 off on Sale Items
</div>
<div  className='text-white font-girl text-md font bold tracking-wider leading-none text-center'>
Increadible Deals
</div>

</div>


    </div>
  )
}

export default Navbar