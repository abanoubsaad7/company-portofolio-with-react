import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoriesSelectionTag = ({ nameOfListBox }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6500/display/categories")
      .then((response) => {
        setCategories(response.data.categoriesArr);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [nameOfListBox]);

  
  const selectionData = () => {
    return categories.map((item) => (
      <>
        <option value={item.name} key={item._id}>
          {item.name}
        </option>
      </>
    ));
  };

  return (
    <>
      <select name={nameOfListBox}>
        <option disabled selected value={'..'} key={'0'}>
          --select the category--
        </option>
        {selectionData()}
      </select>
    </>
  );
};

export default CategoriesSelectionTag;
