import { createContext, useState } from "react";
import { inventoryData } from "../Data";
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
  return (
    <DataContext.Provider
      value={{
        inventoryData,lowStockFilter,setLowStockFilter,departmentFilter,setDepartmentFilter,sortBy,setSortBy
      }}
    >
      {children}
    </DataContext.Provider>
  );
}