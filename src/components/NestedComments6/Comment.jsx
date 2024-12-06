import React from "react";
import AddComment from "./AddComment";

const Comment = ({ cmnt, handleAddComments, comments }) => {
  const filteredComments = comments.filter((ele) => ele.pid === cmnt.id);

  return (
    <div id={cmnt.id} className="comment-wrapper">
      {cmnt.value}
      <AddComment pid={cmnt.id} handleAddComments={handleAddComments} />
      {filteredComments.map((cmnt) => (
        <Comment
          cmnt={cmnt}
          handleAddComments={handleAddComments}
          comments={comments}
        />
      ))}
    </div>
  );
};

export default Comment;
