import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-4">
      <h1 className="">Page Not Found</h1>
      <Link to="" className="btn btn-primary">
        GO HOME
      </Link>
    </div>
  );
};

export default NotFound;
