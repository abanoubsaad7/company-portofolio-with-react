import React from "react";
import SideBar from "../main_and_side_Bar/sideBar";
import CategoriesSelectionTag from "../categoriesSelectionTag";
import axios from "axios";

const ProductsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios
      .post("http://localhost:6500/server/v1/projects/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row container">
      <div className="col-3">
        <SideBar />
      </div>
      <div className="col-8">
        <form onSubmit={handleSubmit}>
          <label>title</label>
          <br />
          <br />
          <input type="text" name="title" />
          <br />
          <br />
          <label>describtion</label>
          <br />
          <br />
          <textarea name="describtion"></textarea>
          <br />
          <br />
          <label>category</label>
          <br />
          <br />
          <CategoriesSelectionTag nameOfListBox={"category"} />
          <br />
          <br />
          <label>coverPhoto:</label>
          <input type="file" name="coverPhoto" />
          <br />
          <br />
          <label>projectPhotos:</label>
          <input type="file" name="projectPhotos" multiple />
          <br />
          <br />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default ProductsForm;
