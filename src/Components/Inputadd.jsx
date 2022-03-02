import React from "react";
import Button from "@mui/material/Button";

const Inputadd = ({ text, setText, data, setData }) => {
  const handleAdd = () => {
    if (text === "") return;
    const newList = [...data];
    newList.push(text);
    setData(newList);
    setText("");
  };

  return (
    <>
      {/* This is for adding in array */}
      <div className="add-body">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button variant="contained" color="success" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </>
  );
};

export default Inputadd;
