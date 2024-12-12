import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/productSlice"
import { Link, useParams } from "react-router-dom";
const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
 
      <Card className="flex justify-center text-center overflow-hidden" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="red" className="">
          <img src={img} alt="img-blur-shadow" className="" />
        </CardHeader>
        <CardBody className="text-center bg-blue-gray-300 ">
          <Typography variant="h5" className="mb-2 font-less text-blue-gray-700 text-2xl">
            {name}
          </Typography>
          <Typography className="font-girl">{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3 bg-blue-gray-400">
          <Typography variant="small" className="text-blue-gray-800 font-general text-xl">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
     
    </Link>
  );
};

export default ProductCard;