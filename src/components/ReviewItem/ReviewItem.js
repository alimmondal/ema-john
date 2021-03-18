import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const ReviewItemStyle={
        borderBottom: '1px solid lightgray',
        marginBottom: '10px',
        paddingBottom: '10px',
        // marginLeft: '200px'
    }
    return (
        <div style={ReviewItemStyle}>
            <h2>This is review</h2>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button className="main-button"
            onClick={() => props.removeProduct(key)} 
            >Remove</button>
        </div>
    );
};

export default ReviewItem;