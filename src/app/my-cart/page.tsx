"use client";
import { BreadcrumbCart } from "@/components/bread-crumn/BreadcrumbCart";
import CartCard from "@/components/card/cart-card";
import Loader from "@/components/loader/loader";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  FetchDeleteCartAsync,
  FetchSingleMyCartAsync,
} from "@/redux/reducers/product";
import { Product } from "@/redux/types";
import { enqueueSnackbar } from "notistack";
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
    dispatch(FetchSingleMyCartAsync());
  }, []);

  useEffect(() => {
    if (status === "data") setLoading(false);
  }, [status]);

  //functions
  const handelRemoveItems = (val: number) => {
    dispatch(FetchDeleteCartAsync({ id: String(val) }));
  };

  return (
    <div className=" p-4 flex flex-col">
      <BreadcrumbCart />
      <h2 className="text-primary font-semibold text-l">My Cart</h2>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full lg:w-2/3">
              <CartItems
                handleRemove={(val) => handelRemoveItems(val)}
                products={cartProducts}
              />
            </div>
            <div className="w-full lg:w-1/3">
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
  handleRemove?: (val: number) => void;
}
//components
const CartItems = ({ products, handleRemove }: cartProps) => {
  const handleRemoveItem = (val: number) => {
    handleRemove && handleRemove(val);
  };
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
                  <button
                    onClick={() =>
                      enqueueSnackbar("Try to remove items", {
                        variant: "success",
                      })
                    }
                    className="text-primary underline"
                  >
                    Move to Wishlist
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveItem(prod.id)}
                    className="text-danger underline"
                  >
                    Remove
                  </button>
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
  const totalPrice = products.reduce(
    (accumulator, products) => accumulator + products.price,
    0
  );
  const totalDiscount = products.reduce(
    (accumulator, products) => accumulator + products.discountPercentage,
    0
  );

  const grandTotal = totalPrice - totalDiscount;

  const buttonActions = () => {
    enqueueSnackbar("Comming soon", {
      variant: "success",
    });
  };

  return (
    <>
      <table
        style={{ overflowX: "auto" }}
        className="min-w-full divide-y divide-divider"
      >
        <thead>
          <tr>
            <th className="w-full px-6 py-3 text-emphasis text-base font-medium text-center">
              Ordre Summary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" text-emphasis text-base font-medium py-2">
              Sub Total
            </td>
            <td>{`$${totalPrice}`}</td>
          </tr>
          <tr>
            <td className=" text-emphasis text-base font-medium py-2">
              Discount
            </td>
            <td>
              <td>{`-$${totalDiscount.toFixed(2)}`}</td>
            </td>
          </tr>
          <tr>
            <td className=" text-emphasis text-base font-medium py-3">
              Delivery Fee
            </td>
            <td>{`$0`}</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>{`$${grandTotal}`}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex pt-4">
        <button
          onClick={() => buttonActions()}
          className="bg-primary text-header items-center flex px-4 py-2 rounded-lg w-1/2 justify-center disabled:bg-lightText"
        >
          Place
        </button>

        <button
          onClick={() => buttonActions()}
          className="border-primary text-primary border-2 flex px-4 py-2 rounded-lg ml-2 w-1/2 justify-center disabled:bg-lightText disabled:border-0"
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
};
