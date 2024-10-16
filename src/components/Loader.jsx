import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <ClipLoader
      size={100}
      height="80"
      width="80"
      color="white"
      ariaLabel="loading"
    />
  );
};

export default Loader;
