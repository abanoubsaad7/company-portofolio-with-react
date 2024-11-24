import React from 'react';

const ProductsTable = () => {
    return (
        <div>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <a href="/add-new-product"> add new </a>
        </div>
    );
}

export default ProductsTable;
