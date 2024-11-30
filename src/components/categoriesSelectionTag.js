import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoriesSelectionTag = ({ nameOfListBox , onCategoryChange }) => {
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

  const handleSelection = (event) => {
    onCategoryChange(event.target.value);
  };
  
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
      <select name={nameOfListBox} onChange={handleSelection}>
        <option disabled selected key={'0'}>
          --select the category--
        </option>
        {selectionData()}
      </select>
    </>
  );
};

export default CategoriesSelectionTag;
