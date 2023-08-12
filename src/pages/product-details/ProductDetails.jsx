import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext';
import './ProductDetails.css'
const ProductDetails = () => {
  const {inventoryData}=useContext(DataContext)  
  const {productId}=useParams()  ;
  const product=inventoryData.find(data=>data.id.toString()===productId)
  const{name,price,stock,imageUrl,supplier,department,sku,delivered,description}=product
  return (
    <div id='product-details'>
        <h1>{name}</h1>
        <section id='image-section'>
            <img src={imageUrl} alt="" />
        </section>
        <p><strong>Price : </strong>&#x24;{price}</p>
        <p><strong>Stock : </strong>{stock}</p>
        <p><strong>Supplier : </strong>{supplier}</p>
        <p><strong>Department : </strong>{department}</p>
        <p><strong>SKU : </strong>{sku}</p>
        <p><strong>Delivered : </strong>{delivered}</p>
        <p><strong>Description : </strong>{description}</p>
    </div>
  )
}

export default ProductDetails