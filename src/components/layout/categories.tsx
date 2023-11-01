import { ROUTES } from "@/utility/routes/contants";
import Link from "next/link";
import React, { useState } from "react";

interface categoriesProps {
  categ: string[];
  handleChange: (val: string) => void;
}

const { GUEST } = ROUTES;

const Categories = ({ categ, handleChange }: categoriesProps) => {
  //states
  const [currentSelect, setcurrentSelect] = useState<number>(0);

  //functions
  const handleItemClick = (index: number, value: string) => {
    setcurrentSelect(index);
    handleChange(value);
  };

  return (
    <div style={{ overflowX: "auto" }} className="flex max-w-full gap-5">
      {categ.map((cat: string, index: number) => {
        return (
          <Link
            key={cat}
            onClick={() => handleItemClick(index, cat)}
            className={`text-default font-medium text-sm ${
              index === currentSelect ? "active" : ""
            }`}
            href={`${GUEST.ROOT}`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
