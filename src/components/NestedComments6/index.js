import React, { useState } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import "./styles.css";

const NestedComments = () => {
  const [comments, setComments] = useState([]);

  const handleAddComments = (cmnt) => {
    setComments([
      ...comments,
      {
        ...cmnt,
      },
    ]);
  };

  const filteredComments = comments.filter((cmnt) => cmnt.pid === "root");
  return (
    <div className="m-10">
      <AddComment pid="root" handleAddComments={handleAddComments} />
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

export default NestedComments;
