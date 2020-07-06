import React, { Component } from 'react';
import FocusTrap from 'focus-trap-react'
import ReactDOM from 'react-dom';

//Styling
import '../css/modal.css';
//Components
import ItemModal from './ItemModal';
//import Checkout from './Checkout';

export class ModalContent extends Component {
  render() {
    let selectedProduct = this.props.selectedProduct;
    console.log(selectedProduct);
    return ReactDOM.createPortal(
      <FocusTrap>
        <div
          aria-modal="true" 
          className="modal-cover"
          tabIndex="-1"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <div className="modal-area" ref={this.props.modalRef}>
            <button 
              className="_modal-close"
              ref={this.props.buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              onClick={this.props.closeModal} 
            >
              <span className="_hide-visual">Close</span>X
            </button>
            <div className="modal-body">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.map((prod) => 
                      <ItemModal
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        selected={prod.selected}
                        price={prod.price}
                        isSelected={this.props.isSelected}
                        className="item"
                      />
                  )}
                </tbody>
              </table>
              {/*
              <Checkout
                selectedShoes={shoes}
              />
              */}
            </div>

          </div>
        </div>
      </FocusTrap>,
      document.body
    );
  }
}

export default (ModalContent);