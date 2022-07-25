import React from 'react';
import classes from './Modal.module.css';

export default function Modal({ setIsOpen }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={() => setIsOpen(false)} />
      <div className={classes.modal}>
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button href="#" class="btn btn-danger" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
