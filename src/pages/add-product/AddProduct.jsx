import React from "react";
import "./AddProduct.css";
const AddProduct = () => {
  return (
    <div id="add-product">
      <h2>Add New Product</h2>
      <label htmlFor="dept">Department</label>
      <select>
        <option>Kitchen</option>
        <option>Clothing</option>
        <option>Toys</option>
      </select>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
    </div>
  );
};

export default AddProduct;
