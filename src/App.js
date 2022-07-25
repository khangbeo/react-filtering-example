import React, { useState } from "react";
import Data from './data/Data'
import Card from './components/Card'
import Buttons from './components/Buttons'
import "./style.css";

export default function App() {
  const [item, setItem] = useState(Data)
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [...new Set(Data.map((Val) => Val.category))];


  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => newVal.category === curcat);
    setItem(newItem);
  };
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
          <Buttons filterItem={filterItem} menuItems={menuItems} setItem={setItem} />
          <Card item={item} isOpen={isOpen} setIsOpen={setIsOpen} /> 
        </div>
      </div>
    </>
  );
}
