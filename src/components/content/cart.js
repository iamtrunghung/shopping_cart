import './card.css'
import { useState, useEffect } from 'react'
function Cart({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0)

    const handleRemove = (id) => {
        setCart((cart)=>{
            const newArr = cart.filter((item) => item.id !== id)
            const jsonArr = JSON.stringify(newArr)
            localStorage.setItem('sanpham',jsonArr)
            return newArr
        })
        handlePrice()
    }
    const handlePrice = () => {
        let total = 0;
        cart.map((item) => {
            return total += item.amount * item.price
        })
        setPrice(total)
    }
    useEffect(() => {
        handlePrice();
    })
    return (
        <div>
            <div className='cart'>
                {cart.map((item) => {
                    return (
                        <div className='cart-body' key={item.id}>
                            <img className='cart-img' src={item.img} alt={item.name} />
                            <p className='cart-name'>{item.name}</p>
                            <div className='cart-tool'>
                                <button onClick={() => handleChange(item, 1)}>+</button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                            </div>
                            <p className='cart-price'>{item.price} đồng</p>
                            <div className='cart-remove'>
                                <button onClick={() => handleRemove(item.id)}>Xóa sản phẩm</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='total'>
                <span>Tổng tiền: {price} đồng</span>
            </div>
        </div>
    )
}
export default Cart