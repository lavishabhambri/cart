import { div } from 'prelude-ls';
import React from 'react';

class CartItem extends React.Component{
    // Defining state in CartItem
    constructor () {
        // Calling the constructor of parent class as we are inheriting from parent class
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img : ''
        }
    }

    // Creating the functions
    // Use arrow functions for binding this
    increaseQuantity = () => {
        this.state.qty += 1;
        console.log(this.state.qty);
    }

    render(){
        // Getting the required properties from the above state object
        const { price, title, qty } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style= { styles.image }/>
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{ title }</div>
                    <div style={{ color: '#777' }}>Rs { price }</div>
                    <div style={{ color: '#777' }}>Qty: { qty }</div>
                    
                    {/* For the icons at the right bottom */}
                    <div className="cart-item-actions">
                        {/* Add Buttons here */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"  
                        />
                    </div>
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