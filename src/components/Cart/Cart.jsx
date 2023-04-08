import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    } else {
        message = <div>
            <h4>Boroloxxx</h4>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length < 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h2>
            {/* {message} */}
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2
                ? <span className='purple'>Aro kino</span>
                : <span>Fokira</span>}

            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button style={{ marginLeft: '5px' }} onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }

            {
                cart.length === 2 && <p>Double bonanza</p>
            }

            {
                cart.length === 3 || <h4>Tinta to hoilo na</h4>
            }
        </div>
    );
};

export default Cart;