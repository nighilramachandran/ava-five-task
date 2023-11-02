import React from "react";

export const ScrollableCards = () => {
  return (
    <div className="flex overflow-auto w-100">
      {[1, 2, 3].map((el) => (
        <div
          key={el}
          style={{minWidth: "80%"}}
          className="bg-header p-4 m-3 w-1/2 rounded-lg border border-primary"
        >
          <div className="flex flex-row">
            <div className="flex-grow w-1/3">
              <p className="">
                Get upto 30% off on order value above $100
                <br />
                <a href="">Terms & Conditions</a>
              </p>
            </div>
            <div className="bg-gray mx-1 p-1 text-center">
              <p className="text-sm">Use code</p>
              <p className="text-sm">JFEFJN200</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
