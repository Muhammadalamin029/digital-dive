import { useContext, useRef, useState } from "react";
import { db } from "../config/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { v6 } from "uuid";
import { BlogContext } from "../context/BlogContextProvider";
import toast from "react-hot-toast";

const useAddComment = (id) => {
  const [commentRef, setCommentRef] = useState("");
  const { user } = useContext(BlogContext);

  const handleCommentInput = (e) => {
    setCommentRef(e.target.value);
  };

  const addComment = async () => {
    try {
      const commentDec = doc(db, "comments", v6());
      if (commentRef === "") {
        toast.error("Enter comment");
        return;
      }
      await setDoc(commentDec, {
        userId: user.email,
        blogId: id,
        message: commentRef,
      });
      setCommentRef("");
    } catch (error) {
      console.log(error);
    }

    return;
  };

  return { commentRef, addComment, handleCommentInput };
};

export default useAddComment;
