import React, {  useState } from "react";
import "./Shop.css";
import Cart from "../Cart/Cart";
import data from "../../data";

const Shop = () => {
  
  const [cartLists, setCartLists] = useState([]);
  const [state, setState] = useState([]);

  let addToCart=[];

  if(!(cartLists.length>3)) {

     addToCart = item => setCartLists([...cartLists, item]);
  }
 
  const clearCart = () => setCartLists([]);

  function handleClick (){
    let min = 1;
    let max = 4;
    let rand =  Math.floor(min + (Math.random() * (max-min)));

    setState (rand)
 }


 
  return (
    <div className="Shop2">
    <h1>Fruits Bazar</h1>
    <hr />
      <h1>Shopping Cart</h1>
      <h1>{state}</h1>

      <div className="">
          <span> Item Length {cartLists.length}</span>
      </div>

    
          <div className="">
          <h3>Cart Lists</h3>

            <div className="products-list-container">
             
              {cartLists.map(({ image, price, text }, id) => (
                <div
                  key={{id}}
                  className=""
                >
                  <img className="product-image" alt={image} src={image} />
                  <div className="">
                    <h3>{text}</h3>
                    
                    <h3 className="">${price}</h3>
                   
                  </div>
                 
                 
                </div>
              ))}

              
             
            </div>
            <div className="">
            <button
                  className=""
                  onClick={()=>handleClick()}
                >
                  random select
                </button>

            
                <button
                  className=""
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

              
              </div>
            {/* filter section */}
            <div className="products-container">
              <Cart data={data} countBtn={addToCart} />
            </div>
          </div>
        </div>
   
  );
};

export default Shop;