import React from "react";

const CategoriesTable = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category name</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <a href="/add-new-category"> add new </a>
    </div>
  );
};

export default CategoriesTable;
