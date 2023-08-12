import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { v4 as uuid } from 'uuid';
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const{addProduct}=useContext(DataContext)
  const navigate=useNavigate()
  const [newProduct,setNewProduct]=useState( {
    id: null,
    department: 'Kitchen',
    name: '',
    description:
      '',
    price: 0,
    stock: 0,
    sku: '',
    supplier: '',
    delivered: 0,
    imageUrl: '',
  })
  const {department,name,description,price,stock,sku,supplier,delivered,imageUrl}=newProduct
  
  const handleFieldChange=(field,e)=>setNewProduct({...newProduct,[`${field}`]:e.target.value})
  
  const handleAddProduct=()=>{
     let product={...newProduct,id:uuid()}
     addProduct(product);
     navigate('/products')
  }

  return (
    <div id="add-product">
      <h2>Add New Product</h2>
      <label htmlFor="dept">Department</label>
      <select value={department} onChange={(e)=>handleFieldChange('department',e)}>
        <option>Kitchen</option>
        <option>Clothing</option>
        <option>Toys</option>
      </select>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name}  onChange={(e)=>handleFieldChange('name',e)}/>
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" value={description}  onChange={(e)=>handleFieldChange('description',e)}/>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price}  onChange={(e)=>handleFieldChange('price',e)}/>
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" value={stock}  onChange={(e)=>handleFieldChange('stock',e)}/>
      </div>
      <div>
        <label htmlFor="sku">SKU</label>
        <input type="text" id="sku" value={sku}  onChange={(e)=>handleFieldChange('sku',e)}/>
      </div>
      <div>
        <label htmlFor="supp">Supplier</label>
        <input type="text" id="supp" value={supplier}  onChange={(e)=>handleFieldChange('supplier',e)}/>
      </div>
      <div>
        <label htmlFor="del">Delivered</label>
        <input type="text" id="del" value={delivered} onChange={(e)=>handleFieldChange('delivered',e)}/>
      </div>
      <div>
        <label htmlFor="img">ImageUrl</label>
        <input type="text" id="img" value={imageUrl}  onChange={(e)=>handleFieldChange('imageUrl',e)}/>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
