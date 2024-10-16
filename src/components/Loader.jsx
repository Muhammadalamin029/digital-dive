import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <ClipLoader
        size={100}
        height="80"
        width="80"
        color="#007bff"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
