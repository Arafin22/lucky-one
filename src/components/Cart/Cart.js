import React from "react";
import "./Cart.css"

const Cart =({ data, countBtn })=> {
    console.log(data);
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
                </button>
              </div>
            );
          })}
        </>
      );
};
export default Cart;