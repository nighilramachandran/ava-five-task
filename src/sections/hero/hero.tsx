"use client";
import React, { FC } from "react";
import {
  outerCardStyles,
  innerCardStyles,
  titleStyles,
  descStyles,
  buttonStyles,
} from "./style";

const Hero: FC = () => {
  return (
    <div
      style={{ ...outerCardStyles }}
      className="flex h-heroHeight w-full rounded-xl overflow-hidden"
    >
      <img className="w-full h-fit" src="/assets/images/lady-bag.png" alt="" />

      <div style={{ ...innerCardStyles }} className="absolute h-4 w-4">
        <div
          style={{ height: "100%" }}
          className="flex flex-col justify-between h-full"
        >
          <h2 style={{ ...titleStyles }} className="text-primary">
            Carry your Funk
          </h2>
          <p
            style={{ ...descStyles }}
            className="text-primary text-xl font-extrabold"
          >
            Trendy handbags collection for your party animal
          </p>
          <div className="">
            <button
              style={{
                ...buttonStyles,
              }}
              className="bg-primary w-44 h-11"
            >
              <img src="/assets/icons/arrow-forward.svg" alt="" />
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
