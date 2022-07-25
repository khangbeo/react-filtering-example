import React from "react";
import Data from "../data/Data";
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-3 my-2 mx-lg-5 btn fw-bold"
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-3 my-2 mx-lg-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;