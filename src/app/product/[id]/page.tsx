"use client";
import { useParams } from "next/navigation";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductView } from "../components/ProductView";
import { ProductTabPanel } from "../components/ProductTabs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GetProductAsync } from "@/redux/reducers/product";
import { Suspense, useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import Loader from "@/components/loader/loader";

export default function Home() {
  //states
  const [loading, setLoading] = useState<boolean>(true);

  //dispatcher
  const dispatch = useAppDispatch();

  //params
  const params = useParams();

  //selectors
  const { product, status } = useAppSelector((state: RootState) => state.Prod);

  //effects
  useEffect(() => {
    dispatch(GetProductAsync({ id: String(params.id) }));
  }, []);

  useEffect(() => {
    if (status === "data") setLoading(false);
  }, [status]);

  return (
    <>
      {loading ? (
        <div className="flex w-full justify-center">
          <Loader />
        </div>
      ) : (
        <Suspense fallback={"Loading..."}>
          {product ? (
            <>
              <Breadcrumb id={product.title} />
              <ProductView product={product} />
              <ProductTabPanel />
            </>
          ) : null}
        </Suspense>
      )}
    </>
  );
}
