import React, { useState } from "react";

const Image = () => {
  const [file, setFile] = useState();

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const click = () => {
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
  };
  return (
    <div className="test">
      <input type="file" onChange={handleFile} />
      <button onClick={click}>Upload</button>
    </div>
  );
};

export default Image;
