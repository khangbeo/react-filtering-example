import React from "react";
import Modal from './Modal' 

const Card = ({ item, isOpen, setIsOpen }) => {            


  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className={`photo w-75`} role='button' onClick={() => setIsOpen(true)} />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Card;