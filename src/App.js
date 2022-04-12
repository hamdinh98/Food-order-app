
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartShown, setCartShown] = useState(false);
  const showCart = () => {
    setCartShown(true)
  }
  const hideCart = () => {
    setCartShown(false)
  }
  return (
    <div>
      {cartShown && <Cart hide={hideCart} cart={cartShown} />}
      <Header show={showCart} cart={cartShown} />
      <main>
        <Meals />
      </main>
    </div>

  );
}

export default App;
