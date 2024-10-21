import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../config/Firebase";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUploadImage = (userData) => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    try {
      const UploadRef = ref(storage, `profilePic/${userData.username}`);
      const uploadedImage = await toast.promise(uploadBytes(UploadRef, image), {
        loading: "Uploading Profile Pic",
        error: "Unable To Upload Pic",
        success: "Uploaded Successfully",
      });
      if (uploadedImage) {
        const URL = await getDownloadURL(UploadRef);
        updateDoc(doc(db, "Users", userData.id), {
          imgURL: URL,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  };

  return { handleImageUpload, uploadImage };
};

export default useUploadImage;
