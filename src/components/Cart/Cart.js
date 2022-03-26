import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'  
import "./Cart.css"

const Cart =({ data, countBtn })=> {
    
    return (
        <>
          {data.map((item, id) => {
            return (
              <div className={item.text} key={id}>
                <img src={item.image} className="product-image" alt="" />
    
                <div className="">
                  <h3>{item.text}</h3>
                  <h3>$ {item.price}</h3>
                
                </div>
                <button
                 
                  className="bt-button"
                  onClick={() => countBtn(item)}
                >
                  Add to Cart
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
              </div>
            );
          })}
        </>
      );
};
export default Cart;