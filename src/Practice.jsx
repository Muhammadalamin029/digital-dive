import React, { useState } from "react";
import { storage } from "./config/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Practice = () => {
  const [file, setFile] = useState(null);
  const imageRef = ref(storage, `blogPostImage/${file.name}`);
  const handleFile = async (e) => {
    setFile(e.target.files[0]);
    const data = await uploadBytes(imageRef, file);
    console.log(data.ref);
    const URL = await getDownloadURL(imageRef);
    console.log(URL);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} />
    </div>
  );
};

export default Practice;
