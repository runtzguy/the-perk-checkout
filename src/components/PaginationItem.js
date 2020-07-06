import React, {Component} from 'react';

class PaginationItem extends Component {

    render(){
        return(
            <a onClick={() => this.props.paginate(this.props.currentPage + this.props.increment)} 
                    href="!#" 
                    className="page-link"
            >{this.props.currentPage + this.props.increment}
            </a>
        )
    }
}

export default PaginationItem;