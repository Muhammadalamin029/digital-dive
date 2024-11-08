import { useContext, useRef, useState } from "react";
import { auth, db } from "../config/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { v6 } from "uuid";
import { BlogContext } from "../context/BlogContextProvider";
import toast from "react-hot-toast";

const useAddComment = (id) => {
  const [commentRef, setCommentRef] = useState("");
  // const { user } = useContext(BlogContext);
  const date = new Date();

  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handleCommentInput = (e) => {
    setCommentRef(e.target.value);
  };

  const addComment = async () => {
    if (commentRef === "") {
      toast.error("Enter comment");
      return;
    }

    try {
      const commentDec = doc(db, "comments", v6());
      const userData = await getDoc(doc(db, "Users", auth.currentUser.uid));
      const user = userData.data();
      await setDoc(commentDec, {
        userId: user.username,
        blogId: id,
        message: commentRef,
        time,
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
