import React from "react";
import Button from "@mui/material/Button";

const Savedata = ({ edittext, seteditText, data, setData, edit, setEdit, i }) => {
  const handleSave = (e, index) => {
    if (edittext === "") {
      const newList = data.filter((data, i) => i !== index);
      setData(newList);
    } else {
      const newList = [...data];
      newList[index] = edittext;
      setData(newList);
    }

    seteditText("");
    setEdit(-1);
  };

  console.log(edittext);

  return (
    <div>
      <input
        value={edittext}
        onChange={(e) => {
          seteditText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={(e) => {
          handleSave(e, i);
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Savedata;
