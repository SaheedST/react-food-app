import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meal from "./components/Meal/Meal";
import {useState} from 'react'
import CartContextProvider from "./store/CartContextProvider";


function App() {

  const [showCart, setShowCart] = useState(false)

  const showCartHandler =()=>{
    setShowCart(true)
  }
  const hideCartHandler =()=>{
    setShowCart(false)
  }

  return (
    <CartContextProvider>
      {showCart && <Cart onShowCart ={showCartHandler} onHideCart={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler}/>
      <Meal />
    </CartContextProvider>
  );
}

export default App;
