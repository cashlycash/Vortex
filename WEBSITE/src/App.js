import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/navbar-2'
import Login from './Components/login'
import Reg from './Components/reg'
import Pro from './Components/pro'
import Cart from './Components/cart'
import Account from './Components/account'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react'

function App() {
  const width = window.innerWidth
  var nav = false
  if (width > 600){
    nav = true
  }
  const [cart, setCart] = useState([])

  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart cart={cart} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/products' element={<Pro cart={cart} setCart={setCart}/>} />
        <Route exact path='/register' element={<Reg />} />
        <Route exact path='/account' element={<Account />} />
      </Routes>
    </div>
    {!nav && <Navbar />}
    {nav && <Navbar2 />}
    </Router>
  );
}

export default App;
