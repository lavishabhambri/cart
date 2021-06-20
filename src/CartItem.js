// import { div } from 'prelude-ls';
// import React from 'react';


// const CartItem = (props) => {
//     // Getting the required properties from the above state object
//     const { price, title, qty } = props.product;
//     const { product, onDecreasingQuantity, onIncreasingQuantity, onDeleteProduct } = props;

//     return (
//         <div className="cart-item">
//             <div className="left-block">
//                 <img style={styles.image} />
//             </div>

//             <div className="right-block">
//                 <div style={{ fontSize: 25 }}>{title}</div>
//                 <div style={{ color: '#777' }}>Rs {price}</div>
//                 <div style={{ color: '#777' }}>Qty: {qty}</div>

//                 {/* For the icons at the right bottom */}
//                 <div className="cart-item-actions">
//                     {/* Add Buttons here */}
//                     <img
//                         alt="increase"
//                         className="action-icons"
//                         src="https://image.flaticon.com/icons/png/512/992/992651.png"
//                         onClick={() => onIncreasingQuantity(product)}
//                     />
//                     <img
//                         alt="decrease"
//                         className="action-icons"
//                         src="https://image.flaticon.com/icons/png/512/992/992683.png"
//                         onClick={() => onDecreasingQuantity(product)}
//                     />
//                     <img
//                         alt="delete"
//                         className="action-icons"
//                         src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
//                         onClick={() => onDeleteProduct(product.id)}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }


// // Adding styles using an object
// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         bordeerRadius: 4
//     }
// }


// // Exporting this file
// export default CartItem;

import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;