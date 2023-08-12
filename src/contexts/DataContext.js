import { createContext, useState } from "react";
import { inventoryData } from "../Data";
import { json } from "react-router-dom";
export const DataContext = createContext();

const getInventoryData=()=>{
    const localInventoryData=localStorage.getItem('inventoryData');
    if(localInventoryData)
       return JSON.parse(localInventoryData)
    return inventoryData   
}

export function DataProvider({ children }) {

  const[inventoryData,setInventoryData]=useState(getInventoryData())
  const[lowStockFilter,setLowStockFilter]=useState(false)
  const[departmentFilter,setDepartmentFilter]=useState('All Departments')
  const[sortBy,setSortBy]=useState('Name')

  const addProduct=(product)=>{
    let tempProduct=[product,...inventoryData];
    localStorage.setItem('inventoryData',JSON.stringify(tempProduct))
    setInventoryData(tempProduct)
  }


  return (
    <DataContext.Provider
      value={{
        inventoryData,lowStockFilter,setLowStockFilter,departmentFilter,setDepartmentFilter,sortBy,setSortBy,addProduct
      }}
    >
      {children}
    </DataContext.Provider>
  );
}