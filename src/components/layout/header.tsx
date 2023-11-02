"use client";
import React, { FC, useEffect, useState } from "react";
import SearchInput from "../inputs/search-input";
import Categories from "./categories";
import Logo from "@/app/assets/logo";
import ButtonWithIcon from "../buttons/button-with-icon";
import Favorite from "@/app/assets/favorite";
import Person from "@/app/assets/person";
import ShoppingBag from "@/app/assets/shopping-bag";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  FetchAllCategories,
  FetchAllProductsAsync,
} from "@/redux/reducers/product";
import Loader from "../loader/loader";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utility/routes/contants";
import { toast } from "@/utility/ui";
import { useSnackbar } from "notistack";
import Link from "next/link";

interface navProps {
  name: string;
  icons: JSX.Element;
}

const navButtons: navProps[] = [
  { name: "fav", icons: <Favorite /> },
  { name: "person", icons: <Person /> },
  { name: "cart", icons: <ShoppingBag /> },
];

const Header: FC = () => {
  //selectors
  const { categories, status } = useAppSelector((state) => state.Prod);
  const firstFiveItems = categories.slice(0, 5);

  //states
  const [selectedCat, setSelectedCat] = useState<string>("smartphones");
  const [loading, setLoading] = useState<boolean>(true);

  //dispatches
  const dispatch = useAppDispatch();

  //routes
  const router = useRouter();

  //const
  const { GUEST } = ROUTES;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //effects
  useEffect(() => {
    dispatch(FetchAllCategories());
  }, []);

  useEffect(() => {
    dispatch(
      FetchAllProductsAsync({
        cat: selectedCat,
      })
    );
  }, [selectedCat]);

  //effects
  useEffect(() => {
    if (status === "data") setLoading(false);
  }, [status]);

  //functions
  const handleChangeCategory = (val: string) => {
    setSelectedCat(val);
  };

  const handleUserButtons = (val: string) => {
    if (val === "cart") router.push(`${GUEST.MY_CART}`);
    else enqueueSnackbar("Comming soon", { variant: "success" });
  };

  const capitalizeWords = (word: string) => {
    return word
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };
  const resultArray = firstFiveItems.map((word) => capitalizeWords(word));

  return (
    <header>
      <nav className="bg-transparent items-center justify-between flex-col lg:flex-row flex h-full gap-8 px-5 py-5">
        {/* first half */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-start w-full gap-8">
          <Link href={"/"}>
            <Logo />
          </Link>
          {loading ? (
            <Loader size={"50"} />
          ) : (
            <Categories
              handleChange={(val) => handleChangeCategory(val)}
              categ={resultArray}
            />
          )}
        </div>
        {/* second half */}
        <div className="flex flex-col sm:flex-row  items-center gap-6">
          <SearchInput />
          <div className="flex  gap-5">
            {navButtons.map((el, ind) => {
              return (
                <ButtonWithIcon
                  handleSelect={(val) => handleUserButtons(val)}
                  name={el.name}
                  icons={el.icons}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
