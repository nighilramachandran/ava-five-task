import React from "react";
import { InfinitySpin } from "react-loader-spinner";

interface loaderProps {
  size?: string;
}
const Loader = ({ size = "200" }: loaderProps) => {
  return <InfinitySpin width={size} color="#17494d" />;
};

export default Loader;
