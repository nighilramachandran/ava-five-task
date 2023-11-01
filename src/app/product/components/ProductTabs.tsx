import React, { useState } from "react";

export const ProductTabPanel = () => {
  const [activeTab, setActiveTab] = useState("Product Description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <div className="flex justify-between mb-6 bg-card rounded-lg p-2">
        <button
          className={`${
            activeTab === "Product Description"
              ? "bg-primary text-secondary"
              : ""
          } px-4 py-2 rounded-lg`}
          onClick={() => handleTabClick("Product Description")}
        >
          Product Description
        </button>
        <button
          className={`${
            activeTab === "Related Products" ? "bg-primary text-secondary" : ""
          } px-4 py-2 rounded-lg`}
          onClick={() => handleTabClick("Related Products")}
        >
          Related Products
        </button>
        <button
          className={`${
            activeTab === "Rating and Reviews"
              ? "bg-primary text-secondary"
              : ""
          } px-4 py-2 rounded-lg`}
          onClick={() => handleTabClick("Rating and Reviews")}
        >
          Rating and Reviews
        </button>
      </div>
      <div className="p-4">
        <p className="font-bold">
          {activeTab}
        </p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Requeret tortor
        cras molestie tincidunt malesuada. Neque mas du imoti magna. Cras lacus,
        viverra auctor in turpis est quoque едет некрие. Color aeque mattis duis
        semper gravida enine imperdiet sit. Et pharetra plane pretium nec
        feugiat tincidunt que lo tristique. Nulla in comectetur alt et tempus,
        Purusovolutpat. Eget est velegnet teorique qu Justo, sed nunc, pretium
        turpis aliquem ammorbum dictumst. Acumentum malefieret
      </div>
    </div>
  );
};
