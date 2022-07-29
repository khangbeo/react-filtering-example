import React, { useState } from 'react';
import Data from './data/Data';
import Card from './components/Card';
import Buttons from './components/Buttons';
import './style.css';

export default function App() {
  // keep track of current list of item to render
  const [item, setItem] = useState(Data);
  // keep track of modal state
  const [isOpen, setIsOpen] = useState(false);
  // create a new set with unique category
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const [formData, setFormData] = useState({
    id: new Date(),
    title: '',
    category: '',
    price: '',
    img: '',
    desc: '',
  });

  console.log(formData);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    item.push(formData);
    return () => controller.abort();
  };

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
          <Buttons
            filterItem={filterItem}
            menuItems={menuItems}
            setItem={setItem}
          />

          <div className="d-flex justify-content-center mt-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="img">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  placeholder="Image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input
                  rows="4"
                  cols="50"
                  className="form-control"
                  id="desc"
                  name="desc"
                  placeholder="Description"
                  value={formData.desc}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add New Item
              </button>
            </form>
          </div>

          <Card item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
}
