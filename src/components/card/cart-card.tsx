import React from "react";

interface cartCardProps {
  img: string;
  name: string;
  quantity: string;
}

const CartCard = ({ img, name, quantity }: cartCardProps) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="h-cartCardHeight w-cartCardWidth rounded-sm overflow-hidden">
        <img className="w-full h-full" src={img} alt={img} />
      </div>
      <div className="flex flex-col align-middle justify-center">
        <p className="text-emphasis text-sm font-normal">{name}</p>
        <p className="text-emphasis text-sm font-normal">{`Qty-${quantity}`}</p>
      </div>
    </div>
  );
};

export default CartCard;
