import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckOut = () => {
        history.push('/shipment');
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();
        // console.log('placed order');
    }
    const removeProduct = (productKey) => {
        // console.log('remove product', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    let thankyou;
    if(orderPlaced){
       thankyou = <img src={happyImage} alt=""/>
    }
    return (

        <div className="twin-container">
            <div className="product-container">
                <h1>Cart Items:{cart.length}</h1>
                {  
                    cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key}
                        product={pd}></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button 
                    onClick={handleProceedCheckOut}
                    className="btn-warning rounded px-4">Proceed Check Out </button>

                </Cart>
            </div>
        </div>
    );
};

export default Review;