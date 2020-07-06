import React, {Component} from 'react';
import '../App.css';
//Components


class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "", 
            selected : false,
        };
        this.isSelected = this.isSelected.bind(this);
    }
    componentDidMount(){
        this.setState({id: this.props.item.id});
    }
    isSelected(){
        let id = this.state.id;
        let selected = this.state.selected;
        this.props.isSelected(selected, id);
    }
    render(){
        const item = this.props.item;
        return(
            <div className="product-tile" > 
                <h3>Id: {item.id} - {item.title}</h3>
                <img src={item.thumbnailUrl} alt="#"></img>
                <span className="price">${item.price}</span>
                <button onClick={this.isSelected}>Add to Cart</button>
            </div>)
    }
}

export default ProductItem;