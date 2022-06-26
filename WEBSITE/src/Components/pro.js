import { useState } from "react";
import Mouse from "../images/mouse.png";
import { useEffect } from "react";
import "../css/pro.css";

const Pro = () => {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const [cart, setCart] = useState([])
  const [logged, setLogged] = useState(true);
  const [items, setItems] = useState(null);
  fetch("https://vortex-api.cashlycash.repl.co/pro")
    .then((res) => res.json())
    .then((data) => {
      setItems(data.products);
    });
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(`https://vortex-api.cashlycash.repl.co/userinfo/${token}`)
      .then((r) => r.json())
      .then((d) => {
        const u = d.body.content;
        if (!u) {
          setLogged(false);
        }
      });
  });
  
  fetch(`https://vortex-api.cashlycash.repl.co/cart/${token}`).then(r => r.json()).then(c => {
    setCart(c.body.content)
  })
  const buy = (e) => {
    const id = e.target.getAttribute("data-id");
    var c = cart
    if (c.includes(items[id])) {
      c.push(items[id]);
      console.log(c);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            item: c
          },
          getCircularReplacer()
        ),
      };
      fetch(`https://vortex-api.cashlycash.repl.co/addcart/${token}`, requestOptions)
        .then((response) => response.json())
    }
  };
  const log = (e) => {
    window.location.href = "/login";
  };
  return (
    <div className="product-container">
      <div className="products">
        {items &&
          items.map((i, u) => (
            <div key={u} class="product">
              <br />
              <img src={Mouse} alt="" className="mouse-pro" />
              <br />
              <span className="name">{i.name}</span>
              <br />
              <span className="price">₹{i.price}</span>
              <br />
              <span className="desc">{i.desc}</span>
              <br />
              {logged && (
                <button className="addto" data-id={u} onClick={buy}>
                  Add to cart
                </button>
              )}
              {!logged && (
                <button className="addto" data-id={u} onClick={log}>
                  Login
                </button>
              )}
            </div>
          ))}
        {!items && (
          <div className="product">
            <br />
            <img src={Mouse} className="mouse-pro" alt="" />
            <br />
            <span className="name">Loading..</span>
            <br />
            <span className="price">Loading..</span>
            <br />
            <span className="desc">Loading..</span>
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pro;
