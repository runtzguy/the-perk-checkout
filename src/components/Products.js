import React, {Component} from 'react';
import '../App.css';
//Components
import ProductTile from './ProductTile';
import Pagination from './Pagination';
import Modal from './Modal';
//Test Data
import dummyData from '../dummyData';

class Products extends Component {
    constructor(){
        super();
        this.state = {
            currentPage : 1,
            postsPerPage : 10,
            indexOfLastPost: 0,
            indexOfFirstPost: 0,
            currentPosts: 0,
            data : []
        };
        this.paginate = this.paginate.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }
    async componentDidMount(){
        /*
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const data = await response.json();
        data.forEach(element => {
            element['selected'] = false;
            element['price'] = this.assignPrice(0, 100);
        });
        */

       //Remove dummyDat when done
        const data = dummyData();
        data.forEach(element => {
            element['selected'] = false;
            element['price'] = this.assignPrice(0, 100);
        });
        let indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        let indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        this.setState({
            indexOfLastPost : indexOfLastPost,
            indexOfFirstPost : indexOfFirstPost,
            data : data
        })
    }
    
    assignPrice(min, max){
        return Math.round(Math.random() * (max - min)) + '.' + Math.round(Math.random() * (99 - 0));
    }

    isSelected(selected, id){
        let newArray = this.state.data.map(obj =>{
            let temp = Object.assign({}, obj)
            if(temp.id === id){
                temp.selected = !obj.selected;
            }
            return temp;
        })
        this.setState( {
           data : [...newArray]

        });
    }
    paginate(pageNumber){
        const indexOfLastPost = pageNumber * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        this.setState({currentPage : pageNumber, 
                        indexOfLastPost : indexOfLastPost, 
                        indexOfFirstPost : indexOfFirstPost
        });

    }


    render(){
        if(this.state.data === null || this.state.indexOfLastPost === 0 || this.state.data.length === 0){
            return 'Loading...';
        }
        const product = this.state.data.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);
        const selectedProduct = this.state.data.filter(e => e.selected ? e : null);
        return (
            <div>
                <Modal  isSelected={this.isSelected} 
                        selectedProduct={selectedProduct}
                />
                <Pagination totalPosts={this.state.data.length} 
                            postsPerPage={this.state.postsPerPage}
                            currentPage={this.state.currentPage}
                            lastPage={Math.ceil(this.state.data.length / this.state.postsPerPage)}
                            paginate={this.paginate}>
                </Pagination>
                <ProductTile 
                    products={product}
                    isSelected={this.isSelected}
                />
            </div>
        )
    }

}

export default Products;