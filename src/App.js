import { useState } from "react";
import Header from "./components/header";
import Product from "./components/content/product";
import Cart from "./components/content/cart"
import Footer from "./components/footer/footer";
function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState(() => {
    const storageCarts = JSON.parse(localStorage.getItem('sanpham'))
    console.log(storageCarts);
    return storageCarts ?? []
  })

  // add product
  const handleAdd = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart(cart => {
      const newCarts = [...cart, item]

      const jsonCarts = JSON.stringify(newCarts)
      localStorage.setItem('sanpham', jsonCarts)

      return newCarts
    })
  }

  // edit up/down quantity 
  const handleChange = (item, number) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += number;
    if (arr[index].amount === 0)
      arr[index].amount = 1;
    setCart([...arr])
  }
  return (
    <div className="App">
      <Header setShow={setShow} size={cart.length} />
      {show ? <Product handleAdd={handleAdd} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      <br />
      <hr style={{ width: '90%', margin: 'auto' }} />
      <br />
      <Footer />
    </div>

  );
}

export default App;
