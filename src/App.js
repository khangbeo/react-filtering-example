import React, { useState } from "react";
import Data from './data/Data'
import Card from './components/Card'
import Buttons from './components/Buttons'
import "./style.css";

export default function App() {
  // keep track of current list of item to render
  const [item, setItem] = useState(Data)
  // keep track of modal state
  const [isOpen, setIsOpen] = useState(false)
  // create a new set with unique category
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  // handle filter
  const filterItem = (curcat) => {
    // take Data array, returns an array where its current element's category matches the function's parameter
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
