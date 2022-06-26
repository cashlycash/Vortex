import '../css/pro.css'
import Mouse from "../images/mouse.png";
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([])
  const token = localStorage.getItem("token");
  fetch(`https://vortex-api.cashlycash.repl.co/userinfo/${token}`)
    .then((r) => r.json())
    .then((d) => {
      const u = d.body.content;
      if (!u) {
        localStorage.removeItem("token");
        window.location.href = "/login"
      }
    });

  fetch(`https://vortex-api.cashlycash.repl.co/cart/${token}`).then(r => r.json()).then(c => {
    setCart(c.body.content)
  })
  return (
    <div className="product-container">
      <h1 className="cart-head">Cart</h1>
    <div class="products">
      {cart &&
        cart.map((c, i) => (
          <div key={i} class="product">
            <br />
            <img src={Mouse} alt="" className="mouse-pro" />
            <br />
            <span className="name">{c.name}</span>
            <br />
            <span className="price">₹{c.price}</span>
            <br />
            <span className="desc">{c.desc}</span>
            <br />
          </div>
        ))}
        {cart.length === 0 && (
          <h1>No Products in cart</h1>
        )}
    </div>
    </div>
  );
};

export default Cart;
