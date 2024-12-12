import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  Button } from "@material-tailwind/react";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center bg-blue-gray-400 lg:h-screen md:h-screen sm:h-full ">
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center gap-5 text-center flex-wrap items-center">
             
                <img
                  className="h-[500px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                ></img>
         
              <div className="flex flex-col">
                 <h5 className="text-2xl font-girl font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-red-700 text-xl font-general font-bold  leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-blue-gray-800 text-xl font-less font-bold pb-4 w-[250px]">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50  w-40 p-2.5 text-center "
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border w-full p-2.5"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border w-40 p-2.5 text-center "
                    >
                      {item.color.map((color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            size: size,
                            color: color,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </div>
             
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;