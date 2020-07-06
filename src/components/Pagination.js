import React, {Component} from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends Component {
    constructor(){
        super();
        this.paginate = this.paginate.bind(this);
    }

    paginate(number){
        this.props.paginate(number);
    }
    render(){
        if(this.props.totalPosts === 0 || this.props.postsPerPage === 0){
            return;
        }
        const pageNumbers = [];
        const currentPage = this.props.currentPage;
        const lastPage = this.props.lastPage;
        const isCurrentPageFirstPage =  currentPage === 1 ? false : true;
        const isCurrentPageLastPage = currentPage === lastPage ? false : true; 
        
        for(let i =1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++){
            pageNumbers.push(i);
        }
        return(
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a onClick={() => this.props.paginate(1)} href="!#"  className="page-link">First Page</a>
                        {isCurrentPageFirstPage ? <PaginationItem paginate={this.paginate} currentPage={this.props.currentPage} increment={-1}/> : <span></span>}
                        <a onClick={() => this.props.paginate(currentPage)} href="!#" className="page-link">{currentPage}</a>
                        {isCurrentPageLastPage ? <PaginationItem paginate={this.paginate} currentPage={this.props.currentPage} increment={1}/> : <span></span>}
                        <a onClick={() => this.props.paginate(this.props.lastPage)} href="!#" className="page-link">Last Page</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Pagination 