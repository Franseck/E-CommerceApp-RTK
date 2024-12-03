import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector(
    (state) => state.products.singleProduct
  );
  const productSize = product[0].size
    ? product[0].size[0]
    : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-gray-800  flex flex-wrap justify-center items-center text-center min-h-screen">
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap justify-center items-center text-center  mt-36 "
            >
              <div className="grow-[2] flex flex-wrap justify-center items-center text-center gap-6 ">
                <img
                  className="h-[350px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                ></img>

                <div className="grow-[3] flex justify-center items-center">
                  <div className="max-w-lg">
                    <h5 className="text-4xl font-less font-bold tracking-normal leading-none pb-4">
                      {item.name}
                    </h5>
                    <p className="text-orange-900 text-xl font-general font-bold tracking-normal leading-none pb-4">
                      15% OFF
                    </p>
                    <p className="text-gray-600 text-xl font-girl font-bold tracking-normal leading-none pb-4">
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
                            onChange={(e) =>
                              setSize(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {item.size.map(
                              (item, index) => {
                                return (
                                  <option
                                    key={index}
                                    value={item}
                                  >
                                    {item}
                                  </option>
                                );
                              }
                            )}
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
                            onChange={(e) =>
                              setSize(e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {item?.size?.map(
                              (item, index) => {
                                return (
                                  <option
                                    key={index}
                                    value={item}
                                  >
                                    {item}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="pb-4">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a color
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={color}
                        onChange={(e) =>
                          setColor(e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.color.map((color, index) => {
                          return (
                            <option
                              key={index}
                              value={color}
                            >
                              {color}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <Button
                        color="gray"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        className="hover:bg-blue-gray-300 text-orange-900 font-general"
                        onClick={()=>dispatch(addToCart({
                          id:item.id,
                          price:item.price,
                          amount : 1,
                          totalPrice :item.price,
                          size:size,
                          color:color
                        }))}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
