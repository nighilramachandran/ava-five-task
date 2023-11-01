import Link from "next/link";
import React, { FC } from "react";

const NewsFeed: FC = () => {
  return (
    <div
      className="flex items-center w-full bg-secondary"
      style={{ justifyContent: "center", height: "50px" }}
    >
      <p className="text-default font-normal text-sm h-newsFeedHeight">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status&nbsp;
        <Link href={"#"} style={{ textDecoration: "underline !important" }}>
          here
        </Link>
      </p>
    </div>
  );
};

export default NewsFeed;
