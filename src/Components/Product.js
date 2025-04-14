import React, { useContext } from 'react'
import product from '../Data/Product'
import Cart from './Cart';
import { CartContext } from '../Context/AllContext';

function Product() {

    const { addToCart, cart } = useContext(CartContext);
    console.log('Cart', cart);
    
    return (
        <div className='px-3'>
            <h3>Product</h3>
            <div className='row w-100 m-0'>
                <div className={cart && cart.length > 0 ? 'col-9' : 'col-12 m-0 px-3'}>
                    <div className='produc row w-100 m-0'>
                        {product.map((item, i) => {
                            return (
                                <div className={cart && cart.length > 0 ? 'col-4 p-3' : 'col-3 p-3'} key={i}>
                                    <div key={i} className='product-item card p-3 h-100 d-flex flex-column justify-content-between'>
                                        <div childrens className='d-flex flex-column justify-content-between'>
                                            <img style={{ width: '100%', height: '200px' }} src={item.image_url} alt={item.name} />
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <p>Rs. {item.price}</p>
                                        </div>
                                        <button className='btn btn-primary' onClick={() => addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {cart && cart.length > 0 ? <div className='col-3 px-3'><Cart /></div> : null}
            </div>
        </div>
    )
}

export default Product