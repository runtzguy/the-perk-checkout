import React, {Component} from 'react';
import '../App.css';
import { isTryStatement } from '@babel/types';

class ProductTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "", 
            selected : false,
        };
    }
    render(){
        const product = this.props.products;
        return(
            <div>
                {product.map(item => 
                    <div className="product-tile" key={item.id}> 
                        <h3>{item.title}</h3>
                        <img src={item.thumbnailUrl} alt="#"></img>
                        <span className="price">${item.price}</span>
                    </div>)}
            </div>
            
        )
    }
}

export default ProductTile;