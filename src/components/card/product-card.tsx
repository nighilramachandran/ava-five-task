import FavoriteProduct from "@/app/assets/favorite-product";
import { Product } from "@/redux/types";
import React, { FC, useState } from "react";

interface productProps {
  product: Product;
}

const ProductCard = ({ product }: productProps) => {
  //states
  const [FillColor, setFillColor] = useState<boolean>(false);
  //functions
  const handleFills = () => {
    setFillColor(!FillColor);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="h-arCardHeight w-arCardHeight bg-card rounded flex-shrink-0 overflow-hidden">
        <img className="w-full h-full" src={product.thumbnail} alt="delete" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-default text-base">{product.brand}</p>
          <button onClick={() => handleFills()}>
            <FavoriteProduct fill={FillColor} />
          </button>
        </div>
        <p className="text-default text-emphasis text-sm">{product.title}</p>
        <p className="text-default text-base">{`$${product.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
