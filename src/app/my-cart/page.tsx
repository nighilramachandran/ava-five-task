"use client";
import CartCard from "@/components/card/cart-card";
import Loader from "@/components/loader/loader";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FetchAllMyCartAsync } from "@/redux/reducers/product";
import { Product } from "@/redux/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const cartItemsTableHeader: string[] = [
  "Product Name",
  "Price",
  "Qty",
  "Subtotal",
];

export default function MyCart() {
  //dispatches
  const dispatch = useAppDispatch();

  //states
  const [loading, setLoading] = useState<boolean>(true);

  //selectors
  const { cartProducts, status } = useAppSelector((state) => state.Prod);

  //effects
  useEffect(() => {
    dispatch(FetchAllMyCartAsync());
  }, []);

  useEffect(() => {
    if (status === "data") setLoading(false);
  }, [status]);

  return (
    <div className=" p-4 flex flex-col gap-5">
      <h2 className="text-primary font-semibold text-l">My Cart</h2>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <CartItems products={cartProducts} />
            </div>
            <div className="w-1/3">
              <OrderSummary products={cartProducts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface cartProps {
  products: Product[];
}

const CartItems = ({ products }: cartProps) => {
  return (
    <table className="min-w-full divide-y divide-divider">
      <thead>
        <tr>
          {cartItemsTableHeader.map((th, ind) => {
            return (
              <th
                key={ind}
                colSpan={ind === 0 ? 2 : 0}
                className="w-full px-6 py-3 text-emphasis text-base font-medium text-left"
              >
                {th}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {products.map((prod, ind) => {
          return (
            <>
              <tr key={ind}>
                <td
                  colSpan={2}
                  className="w-full px-6 py-3 text-emphasis text-base font-medium text-left"
                >
                  <CartCard
                    img={prod.thumbnail}
                    name={prod.title}
                    quantity={prod.quantity}
                  />
                </td>
                <td className="w-full px-6 py-3 text-emphasis">{`$${prod.price}`}</td>
                <td className="w-full px-6 py-3 text-emphasis">
                  {prod.quantity}
                </td>
                <td className="w-full px-6 py-3 text-emphasis">{`$${prod.total}`}</td>
              </tr>
              <div className="flex justify-end w-full gap-5">
                <div>
                  <button className="text-primary underline">
                    Move to Wishlist
                  </button>
                </div>
                <div>
                  <button className="text-danger underline">Remove</button>
                </div>
              </div>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

const OrderSummary = ({ products }: cartProps) => {
  return (
    <table className="min-w-full divide-y divide-divider">
      <thead>
        <tr>
          <th className="w-full px-6 py-3 text-emphasis text-base font-medium text-center">
            Ordre Summary
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        {/* {products.map((prod, ind) => {
          return (
            <>
              <tr key={ind}>
                <td
                  colSpan={2}
                  className="w-full px-6 py-3 text-emphasis text-base font-medium text-left"
                >
                  <CartCard
                    img={prod.thumbnail}
                    name={prod.title}
                    quantity={prod.quantity}
                  />
                </td>
                <td className="w-full px-6 py-3 text-emphasis">{`$${prod.price}`}</td>
                <td className="w-full px-6 py-3 text-emphasis">
                  {prod.quantity}
                </td>
                <td className="w-full px-6 py-3 text-emphasis">{prod.total}</td>
              </tr>
              <div className="flex justify-end w-full gap-5">
                <div>
                  <button className="text-primary underline">
                    Move to Wishlist
                  </button>
                </div>
                <div>
                  <button className="text-danger underline">Remove</button>
                </div>
              </div>
            </>
          );
        })} */}
      </tbody>
    </table>
  );
};
