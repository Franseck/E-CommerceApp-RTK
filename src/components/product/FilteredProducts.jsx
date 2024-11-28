import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const FilteredProducts = () => {
const products = useSelector((state)=>state.products)
const {type} = useParams();

  return (
<div className="">
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}         
          </h1>
</div>

        </div>



    </div>
  )
}

export default FilteredProducts