import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { FC } from "react";

//constants
const aboutDatas: string[] = ["Contact", "About Us", "Careers", "Press"];
const policyDatas: string[] = [
  "Return Policy",
  "Terms of Use",
  "Sitemap",
  "Security",
  "Privacy",
  "EPR Compliance",
];

const Footer: FC = () => {
  //selectors
  const { categories } = useAppSelector((state) => state.Prod);
  const categoriesAfterFive = categories.slice(5, 12);

  //functions
  const capitalizeWords = (word: string) => {
    return word
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  const resultArray = categoriesAfterFive.map((word) => capitalizeWords(word));

  return (
    <div className="bg-footer min-h-footerHeight w-full h-full  p-8">
      <div className="flex flex-col sm:flex-row gap-7">
        {/* first coulumn */}
        <div className="flex flex-col gap-4 sm:w-1/7 p-4">
          <h3 className="text-secondary text-base font-medium">
            Shop by Category
          </h3>
          <div className="flex flex-col gap-2">
            {resultArray.map((el, index) => {
              return (
                <Link
                  href={"#"}
                  key={el}
                  className="text-lightText text-base font-medium"
                >
                  {el}
                </Link>
              );
            })}
          </div>
        </div>
        {/* second coulumn */}
        <div className="flex flex-col gap-4 sm:w-1/7 p-4">
          <h3 className="text-secondary text-base font-medium">About</h3>
          <div className="flex flex-col gap-2">
            {aboutDatas.map((el, index) => {
              return (
                <Link
                  href={"#"}
                  key={el}
                  className="text-lightText text-base font-medium"
                >
                  {el}
                </Link>
              );
            })}
          </div>
        </div>
        {/* third coulumn */}
        <div className="flex flex-col gap-5 sm:w-1/7 p-4">
          <h3 className="text-secondary text-base font-medium">Policy</h3>
          <div className="flex flex-col gap-2">
            {policyDatas.map((el, index) => {
              return (
                <Link
                  href={"#"}
                  key={el}
                  className="text-lightText text-base font-medium"
                >
                  {el}
                </Link>
              );
            })}
          </div>
        </div>
        {/* fourth coulumn */}
        <div className="flex-grow md:w-1/4 p-4">
          <div className="flex flex-col md:items-end gap-4">
            <img
              className="max-w-[200px]"
              src="/assets/images/socila-medias.svg"
              alt="socila-medias"
            />
            <div className="flex flex-row gap-1 align-middle">
              <img src="/assets/icons/location.svg" alt="location" />
              <p className="text-bright">United States</p>
            </div>
            <p className="text-lightText text-sm">
              © 2021 | Cora Leviene All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
