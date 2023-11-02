import React, { useState } from "react";
import { ScrollableCards } from "../card/ScrollableCards";
import { Product } from "@/redux/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AddToBagAsync } from "@/redux/reducers/product";

type Props = {
  product: Product;
};

export const ProductView = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector((state) => state.Prod);

  const [quantity, setquantity] = useState(1);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquantity(Number(e.target.value));
  };

  const addToBag = () => {
    dispatch(AddToBagAsync({ id: String(product.id), quantity }));
  };
  const addToWishlist = () => {};

  return (
    <div className="flex flex-wrap m-4">
      <div className="w-full md:w-1/2 md:pr-8">
        {/* <!-- Product Image --> */}
        <img
          src={product.images[0]}
          alt="Product Image"
          className="w-full mb-4 rounded-lg"
        />

        {/* <!-- Small Product Images --> */}
        <div className="flex items-center overflow-x-auto mb-4">
          <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </svg>
          </button>
          <div className="flex pl-2 pr-2 justify-between">
            <img
              src={product.images[1]}
              alt="Small Product Image"
              className="w-1/5 rounded-lg"
            />
            <img
              src={product.images[2]}
              alt="Small Product Image"
              className="w-1/5 rounded-lg"
            />
            <img
              src={product.images[3]}
              alt="Small Product Image"
              className="w-1/5 rounded-lg"
            />
            <img
              src={product.images[4]}
              alt="Small Product Image"
              className="w-1/5 rounded-lg"
            />
          </div>
          <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        {/* <!-- Product Details --> */}
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* <!-- Stars Rate --> */}
        <div className="flex items-center mb-4">
          {Array.from(Array(Math.floor(product.rating)).keys()).map((star) => (
            <span className="text-yellow mr-1">★</span>
          ))}

          {/* <span className="text-yellow mr-1">★</span>
          <span className="text-yellow mr-1">★</span>
          <span className="text-secondary mr-1">★</span>
          <span className="text-secondary mr-1">★</span> */}
        </div>

        {/* <!-- Price --> */}
        <div className="flex space-x-3">
          <p className="text-2xl font-bold mb-4">
            $
            {(
              product.price -
              product.price * (product.discountPercentage / 100)
            ).toFixed(2)}
          </p>
          <p className="text-2xl font-bold mb-4 text-gray line-through">
            ${product.price}
          </p>
          <p className="text-2xl font-bold mb-4 text-danger">
            {product.discountPercentage}% OFF
          </p>
        </div>

        {/* <!-- Delivery Details --> */}
        <div>
          <p className="font-bold">Delivary Details</p>
          <p className="mb-4 text-sm">Estimated delivery: 3-5 business days</p>
        </div>

        {/* <!-- Quantity --> */}
        <div className="flex items-center mb-4">
          <label className="mr-2">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleChangeQuantity}
            className="w-16 px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <ScrollableCards />

        {/* <!-- Add to Bag Button --> */}

        <div className="flex w-full">
          <button
            onClick={addToBag}
            disabled={status === "loading"}
            className="bg-primary text-header flex px-4 py-2 rounded-lg w-1/2 justify-center disabled:bg-lightText"
          >
            <BagIcon />
            Add to Bag
          </button>

          {/* <!-- Add to Wishlist Button --> */}
          <button
            onClick={addToWishlist}
            disabled={status === "loading"}
            className="border-primary text-primary border-2 flex px-4 py-2 rounded-lg ml-2 w-1/2 justify-center disabled:bg-lightText disabled:border-0"
          >
            <WishlistIcon />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

const BagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

const WishlistIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);
