import {Link } from "react-router-dom"
import './header.css'
import Slider from "../carousel/slide"
function Header({ setShow, size }) {
    return (
        <div>
            <div className="wrapper">
                <div className="heading">
                    <div className="heading-title" onClick={() => setShow(true)}>
                        <h2>Fast<span>Food</span></h2>
                    </div>
                    <ul className="heading-tags">
                        <li><Link to="/trangchu">Trang chủ</Link></li>
                        <li><Link to="/thucdon">Thực đơn</Link></li>
                        <li><Link to="/tintuc">Tin tức</Link></li>
                        <li><Link to="/lienhe">Liên hệ</Link></li>
                    </ul>
                    <div className="shopping-cart" onClick={() => setShow(false)}>
                        <p>Giỏ hàng({size})</p>
                    </div>
                </div>
            </div>
            <Slider />
        </div>
    )
}
export default Header