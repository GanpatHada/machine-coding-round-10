import React, { useContext, useState } from "react";
import "./Products.css";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
const Products = () => {
  const {
    inventoryData,
    lowStockFilter,
    setLowStockFilter,
    departmentFilter,
    setDepartmentFilter,
    sortBy,
    setSortBy,
  } = useContext(DataContext);

  const getProducts = () => {
    let myPorducts = inventoryData;
    if (departmentFilter !== "All Departments")
      myPorducts = myPorducts.filter(
        (prod) => prod.department === departmentFilter
      );
    if (lowStockFilter)
      myPorducts = myPorducts.filter((prod) => prod.stock <= 10);
    if (sortBy === "Name") {
      myPorducts = [...myPorducts].sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1;
      });
    }
    if (sortBy === "Price") {
      myPorducts = [...myPorducts].sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortBy === "Stock") {
      myPorducts = [...myPorducts].sort((a, b) => {
        return a.stock - b.stock;
      });
    }

    return myPorducts;
  };

  const handleDepartmentChange = (e) => setDepartmentFilter(e.target.value);
  const handleProductSorting = (e) => setSortBy(e.target.value);

  return (
    <div id="products">
      <header className="all-centered">
        <h3>Products</h3>
        <select onChange={handleDepartmentChange} value={departmentFilter}>
          <option>All Departments</option>
          <option>Kitchen</option>
          <option>Clothing</option>
          <option>Toys</option>
        </select>
        <label htmlFor="low-stock-items">
          <input
            type="checkbox"
            id="low-stock-items"
            checked={lowStockFilter}
            onChange={() => setLowStockFilter(!lowStockFilter)}
          />
          Low Stock Items
        </label>
        <select onChange={handleProductSorting} value={sortBy}>
          <option>Name</option>
          <option>Price</option>
          <option>Stock</option>
        </select>
        <Link to='/addProduct'><button id="new-item">New</button></Link>
      </header>
      <table>
        <thead>
          <tr>
            <th className="image">Image</th>
            <th className="name">Name</th>
            <th className="desc">Description</th>
            <th className="price">Price</th>
            <th className="stock">Stock</th>
            <th className="supplier">Supplier</th>
          </tr>
        </thead>
        <tbody>
          {getProducts().map((data) => {
            return (
              <tr key={data.id}>
                <td className="image">
                  <img src={data.imageUrl} alt="" />
                </td>
                <td className="name"><Link to={`/products/${data.id}`}>{data.name}</Link></td>
                <td className="desc">{data.description}</td>
                <td className="price">{data.price}</td>
                <td className="stock">{data.stock}</td>
                <td className="supplier">{data.supplier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
