import React from 'react'
import { Button } from '@material-tailwind/react'
import clothes from "../helper/images/clothes.jpg"



const NavigationButtons = () => {
    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
      ];

  return (
    <div>
        <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black font-girl font-extrabold bg-blue-gray-300 hover:bg-blue-gray-900 hover:text-white duration-300 ease-in-out"
                 >
                  {button}
                </Button>
           
            </div>
          );
        })}
      </div>
      <div className="flex text-center  justify-center gap-2 bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none font-general">
          SALES UP TO 50%
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="white" className="size-5">
  <path fill-rule="evenodd" d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z" clipRule="evenodd" />
</svg>

      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[500px] w-[60%] rounded-md shadow-lg shadow-gray-900"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default NavigationButtons