import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/productSlice";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <div className="">
    <Link to={`/filteredProducts/${type}/` + id} >
      <Card className="w-96 bg-blue-gray-300" onClick={()=>dispatch(singleProduct(id))}>
        <CardHeader color="gray" className=" h-96">
          <img src={img} alt="img-blur-shadow" className="min-h-96 w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2 font-girl">
            {name}
          </Typography>
          <Typography className="font-less text-black">{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" className="font-general text-blue-gray-900">{price}$</Typography>
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
    </div>
  );
};

export default ProductCard;