import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3 className="name"><Link to={"/product/"+key}>{name}</Link> </h3>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock- order soon</p>
               { props.showAddToCart && <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faCoffee} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;