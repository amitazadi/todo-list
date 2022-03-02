import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Editanddelete = ({ edittext, seteditText, data, setData, edit, setEdit, i, element }) => {
  const handleDelete = (index) => {
    const newList = data.filter((data, i) => i !== index);
    setData(newList);
  };

  return (
    <>
      <div className="editdelete">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setEdit(i);
            seteditText(element);
          }}
        >
          <EditIcon />
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleDelete(i);
          }}
        >
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};

export default Editanddelete;
