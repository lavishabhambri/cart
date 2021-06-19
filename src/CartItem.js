import { div } from 'prelude-ls';
import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style= { styles.image }/>
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: '#777' }}>Rs 999</div>
                    <div style={{ color: '#777' }}>Qty: 1</div>
                </div>
                <div className="cart-item-actions">
                    {/* Add Buttons here */}
                </div>
            </div>
        );
    }
}

// Adding styles using an object
const styles = {
    image:{
        height: 110,
        width: 110,
        bordeerRadius: 4
    }
}


// Exporting this file
export default CartItem;