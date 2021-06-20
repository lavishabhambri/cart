import React from "react";
import Cart from './Cart';
import Navbar from "./Navbar";

class App extends React.Component {
  // Defining state in App
  constructor () {
    // Calling the constructor of parent class as we are inheriting from parent class
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
          id: 3
        }
      ]
    }
  }

  // Functions
  // Use arrow functions for binding this
  // Passing product as an argument
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);

    // Getting all the products
    const { products } = this.state;

    // Finding the index of the required product array among the products array
    const index = products.indexOf(product);

    // Increasing qty by 1
    products[index].qty += 1;

    // Setting state
    //using setState to render the code
    this.setState({
      products
      // or do products : products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handleDeleteProduct = (id) => {
    console.log('Delete the product with id: ', id);
    const { products } = this.state;

    // Filtering the product with the required id and storing the rest in items
    const items = products.filter((item) => item.id !== id);

    // Setting the products = items
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotalPrice = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += (product.qty * product.price); 
    })
    return cartTotal;
  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>
          TOTAL : {this.getCartTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;