"use client";
import { useParams } from "next/navigation";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductView } from "../components/ProductView";
import { ProductTabPanel } from "../components/ProductTabs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GetProductAsync } from "@/redux/reducers/product";
import { Suspense, useEffect } from "react";
import { RootState } from "@/redux/store";

export default function Home() {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { product, status } = useAppSelector((state: RootState) => state.Prod);

  useEffect(() => {
    dispatch(GetProductAsync({ id: String(params.id) }));
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      {product ? (
        <>
          <Breadcrumb id={product.title} />
          <ProductView product={product} />
          <ProductTabPanel />
        </>
      ) : null}
    </Suspense>
  );
}
