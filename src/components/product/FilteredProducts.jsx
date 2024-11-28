import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const FilteredProducts = () => {
const products = useSelector((state)=>state.products.filteredProducts)
const {type} = useParams();

  return (
<div className="bg-blue-gray-300">
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-girl font-bold tracking-normal leading-none ">
            {type}         
          </h1>
</div>
<div className="flex flex-wrap justify-center text-center items-center py-8 gap-10 bg-blue-gray-700 ">
{
  products.filter((products)=>products.type===type).map((product, index)=> {
    return (   
    <div key={index}>
      <ProductCard
        id={product.id}
        name={product.name}
        text={product.text} 
        img={product.img}
        price={product.price}
        color={product.color}
        >
      </ProductCard>
    </div>
  )
  })
}
</div>

        </div>



    </div>
  )
}

export default FilteredProducts