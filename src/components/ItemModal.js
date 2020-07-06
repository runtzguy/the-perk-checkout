import React, { Component } from 'react';
import '../App.css';
//Styling


class ItemModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            title : props.title,
            price : props.price,
            selected : props.selected,
        }
        this.isSelected = this.isSelected.bind(this);
    }

    componentDidMount(){
        this.setState({id : this.props.id});
    }

    isSelected(){
        this.props.isSelected(this.state.selected, this.state.id);
        this.setState({
           selected : false
        })
    }

    render(){
        return (
            <tr className="modal-item">
                <td>{this.state.title}</td>
                <td>${this.state.price}</td>
                <td onClick={this.isSelected}>X</td>
            </tr>
        )
    }
}

export default ItemModal;