
import { useState } from "react";

const Header = () => {
    let [login, setLogin] = useState('Login')
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" />
            </div>
            <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        setLogin('Logout')
                    }}>{login}</button>
                 </ul>
            </div>
        </div>
    )
}

export default Header;