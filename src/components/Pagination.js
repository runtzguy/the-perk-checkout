import React, {Component} from 'react';

class Pagination extends Component {

    render(){
        if(this.props.totalPosts == 0 || this.props.postsPerPage == 0){
            return;
        }
        const pageNumbers = [];
        
        for(let i =1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++){
            pageNumbers.push(i);
        }
        return(
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number =>
                        <li key={number} className="page-item">
                            <a onClick={() => this.props.paginate(number)} 
                                href="!#" 
                                className="page-link"
                            >{number}</a>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }

}

export default Pagination 