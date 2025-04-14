import React, { useContext, useMemo } from 'react'
import { CartContext } from '../Context/AllContext';
// import { CartContext } from '../Context/CartContext';

function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart])

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>Cart</h1>
                <div className='cart-icon position-relative'>
                    <i class="fa-solid fs-4 fa-cart-shopping"></i>
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {cart.length}
                        <span className='visually-hidden'>unread messages</span>
                    </span>
                </div>
            </div>
            <div className='cart'>
                {cart.map((item, i) => {
                    return (
                        <div key={i} className='cart-item d-flex flex-column justify-content-between border-bottom p-3 mb-3'>
                            <div className='d-flex flex-column'>
                                <img style={{ width: '100px', height: '100px' }} src={item.image_url} alt={item.name} />
                                <h6>{item.name}</h6>
                                <p>Rs. {item.price}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div>
                                    <button className='btn btn-secondary' onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                    <button className='btn btn-secondary' onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                                <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='total'>
                <h4>Total: Rs.{total}</h4>
            </div>
            <div className='checkout'>
                <button className='btn btn-success' onClick={clearCart}>Checkout</button>
            </div>
        </div>)
}

export default Cart