import React from "react";
import useAddComment from "../hooks/useAddComment";
import { useEffect, useState } from "react";
import { db } from "../config/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Comments = ({ id }) => {
  const { commentRef, addComment, handleCommentInput } = useAddComment(id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentQuery = query(
      collection(db, "comments"),
      where("blogId", "==", id)
    );
    const snapshot = onSnapshot(commentQuery, (data) => {
      let comment = [];
      data.docs.forEach((doc) => {
        comment.push({ ...doc.data(), id: doc.id });
      });
      setComments(comment.reverse());
      console.log(comments);
    });

    return () => snapshot();
  }, []);

  return (
    <section id="comment">
      <div>
        <textarea
          value={commentRef}
          onChange={handleCommentInput}
          className="comment-box"
        />
        <br />
        <button className="btn button" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <div className="comments">
        <ul className="list-group list-group-flush">
          {comments?.map((comment, i) => {
            return (
              <li key={i} className="list-group-item">
                <span className="comment-user">{comment.userId}</span>
                <span className="comment-message">{comment.message}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
