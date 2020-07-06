import React, {Component} from 'react';
import '../App.css';

import ProductItem from './ProductItem';

class ProductTile extends Component {
    render(){
        const product = this.props.products;
        return(
            <div className="products">
                {product.map(item => 
                    <ProductItem 
                        key={item.id}
                        item={item}
                        isSelected={this.props.isSelected}
                    />)}
            </div>
        )
    }
}

export default ProductTile;