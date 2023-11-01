"use client";
import ProductCard from "@/components/card/product-card";
import Loader from "@/components/loader/loader";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { titleProps, viewAllProps } from "./style";

const NewArrivals = () => {
  //selectors
  const { products, status } = useAppSelector((state) => state.Prod);
  //states
  const [loading, setLoading] = useState<boolean>(true);

  //effects
  useEffect(() => {
    if (status === "data") setLoading(false);
    else setLoading(true);
  }, [status]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p style={{ ...titleProps }} className="text-2xl font-semibold">
          New Arrivals
        </p>
        <button style={{ ...viewAllProps }} className="text-primary">
          View All
          <img src="/assets/icons/chevron-right.svg" alt="" />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div style={{ overflow: "hidden", overflowX: "auto" }}>
          <div className="flex gap-5">
            {products.map((product, ind) => {
              return (
                <div key={ind}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
