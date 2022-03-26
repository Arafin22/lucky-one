import React from "react";
import "./Cart.css"

const Cart =({ data, countBtn })=> {
    console.log(data);
    return (
        <>
          {data.map((item, id) => {
            return (
              <div className={`col-sm-4 mb-3 ${item.text}`} key={id}>
                <img src={item.image} className="product-image" alt="" />
    
                <div className="d-flex mt-2">
                  <h3>{item.text}</h3>
                  <h3>$ {item.price}</h3>
                
                </div>
                <button
                  type="submit"
                  className="btn btn-primary cartBtn my-3"
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