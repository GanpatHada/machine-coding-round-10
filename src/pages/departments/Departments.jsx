import React, { useContext } from "react";
import "./Departments.css";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
const Departments = () => {
    const navigate=useNavigate()
   const{setDepartmentFilter}=useContext(DataContext)
   const handleDepartmentClick=(dep)=>{
      setDepartmentFilter(dep)
      navigate('/products')
   } 

  return (
    <div id="departments" className="content">
      <div className="cards all-centered" onClick={()=>handleDepartmentClick('Kitchen')}>
        <p>Kitchen</p>
      </div>
      <div className="cards all-centered" onClick={()=>handleDepartmentClick('Clothing')}>
        <p>Clothing</p>
      </div>
      <div className="cards all-centered" onClick={()=>handleDepartmentClick('Toys')}>
        <p>Toys</p>
      </div>
    </div>
  );
};

export default Departments;
