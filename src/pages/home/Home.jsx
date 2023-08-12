import React, { useContext } from "react";
import "./Home.css";
import { DataContext } from "../../contexts/DataContext";
const Home = () => {
  const { inventoryData } = useContext(DataContext);
  const{totalStock,totalDelivered}=inventoryData.reduce((acc,cur)=>{
    acc.totalStock=acc.totalStock+cur.stock;
    acc.totalDelivered=acc.totalDelivered+cur.delivered;
    return acc;

  },{totalStock:0,totalDelivered:0})

   
  const getLowStockItems=()=>{
    const items=inventoryData.filter(data=>data.stock<=10)
    return items.length;
  }


  return (
    <div id="home">
      <div className="cards ">
         <span>{totalStock}</span>
         <p>Total Stock</p>
      </div>
      <div className="cards ">
         <span>{totalDelivered}</span>
         <p>Total Delivered</p>
      </div>
      <div className="cards ">
         <span>{getLowStockItems()}</span>
         <p>Low Stock Items</p>
      </div>
    </div>
  );
};

export default Home;
