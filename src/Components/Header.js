import React, { useContext } from 'react'
import { CartContext } from '../Context/AllContext';

function Header() {
    const { cart } = useContext(CartContext);
    
    return (
        <div>
            <header className='d-flex justify-content-between align-items-center p-3 bg-light'>
                <h2 className='m-0'>Electronic Shop</h2>
                <div className='navbar'>
                    <ul className='d-flex list-unstyled m-0'>
                        <li className='mx-3'><a href="#">Home</a></li>
                        <li className='mx-3'><a href="#">Products</a></li>
                        <li className='mx-3'><a href="#">About</a></li>
                        <li className='mx-3'><a href="#"  onClick={() => cart.length === 0 ? alert("Cart is Empty") : null}>Cart</a></li>
                    </ul>
                    <div className='cart-icon position-relative ms-4'>
                        <i className="fa-solid fs-4 fa-cart-shopping"></i>
                        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {cart.length}
                            <span className='visually-hidden'>unread messages</span>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header