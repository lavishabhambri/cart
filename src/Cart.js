import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    // Defining state in Cart
    constructor () {
        // Calling the constructor of parent class as we are inheriting from parent class
        super();
        this.state = {
            products : [
                {
                    price : 9999,
                    title : 'Phone',
                    qty : 1,
                    img : '',
                    id  : 1
                },
                {
                    price : 999,
                    title : 'Watch',
                    qty : 1,
                    img : '',
                    id  : 2
                },
                {
                    price : 99999,
                    title : 'Laptop',
                    qty : 1,
                    img : '',
                    id  : 3
                }

            ]
        }
        
    }

    // Functions
    // Use arrow functions for binding this
    // Passing product as an argument
    handleIncreasingQuantity = (product) => {
        console.log('Increase the qty of ', product);
        
        // Getting all the products
        const { products } = this.state;

        // Finding the index of the required product array among the products array
        const index = products.indexOf(product);

        // Increasing qty by 1
        products[index].qty += 1;

        // Setting state
        //using setState to render the code
        this.setState({
            products : products
            // or do products
        })
    }

    handleDecreasingQuantity = (product) => {
        console.log('Decrease the qty of ', product);

        const { products } = this.state;

        const index = products.indexOf(product);
        if (products[index].qty > 0 ){
            products[index].qty -= 1;

            this.setState({
                products
            })
        }
        
    }
    
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return < CartItem 
                            product={ product } 
                            key= { product.id } 
                            onIncreasingQuantity= {this.handleIncreasingQuantity}
                            onDecreasingQuantity= {this.handleDecreasingQuantity}
                            />
                    })
                }
            </div>
        );
    }
}

export default Cart;