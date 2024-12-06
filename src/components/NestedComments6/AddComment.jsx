import React, { useState } from "react";

const AddComment = ({ pid, handleAddComments }) => {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <input value={val} onChange={handleChange} />
      <button
        onClick={() => handleAddComments({ pid, value: val, id: Date.now() })}
      >
        Add
      </button>
    </div>
  );
};

export default AddComment;
