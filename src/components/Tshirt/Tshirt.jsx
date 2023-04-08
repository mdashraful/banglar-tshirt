import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;

    return (
        <div className='t-shirt'>
            <div className='t-shirt-pic'>
                <img src={picture} alt="" />
            </div>
            <div className='t-shirt-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Tshirt;