import React, { Component } from 'react';
import '../App.css';
//Components
import ModalContent from './ModalContent'

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShown : false,
        }
    }
    showModal = () => {
        this.setState({ isShown: true }, () => {
          this.closeButton.focus();
        });
        this.toggleScrollLock();
      };
      closeModal = () => {
        this.setState({ isShown: false });
        this.toggleScrollLock();
      };
      onKeyDown = event => {
        if (event.keyCode === 27) {
          this.closeModal();
        }
      };
      onClickOutside = event => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
      };
    
      toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
      };
    render(){
        const selectedProduct = this.props.selectedProduct;
        return (
            <React.Fragment>
                <div className="shopping-cart" onClick={this.showModal}>Shopping Cart</div>
                {this.state.isShown ?
                    <ModalContent
                        selectedProduct={selectedProduct}
                        isSelected={this.props.isSelected}

                        modalRef={n => (this.modal = n)}
                        buttonRef={n => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />:
                    <React.Fragment/>
                }
            </React.Fragment>
        )
    }
}

export default Modal;