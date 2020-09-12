import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move';
function Checkout() {
const [{ basket, user }, dispatch] = useStateValue()

    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, { user?.email }</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>                
                <FlipMove staggerDelayBy={150}
                    enterAnimation={{
                        from: {
                        transform: 'rotateX(180deg)',
                        opacity: 0.1,
                        },
                        to: {
                        transform: '',
                        },
                    }}
                    leaveAnimation={{
                        from: {
                            transform: '',
                        },
                        to: {
                        transform: 'rotateX(-120deg)',
                        opacity: 0.1,
                        },
                    }}>
                {   
                    basket.map((item, i) => 
                        <CheckoutProduct
                            key={i} 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    )
                }
                </FlipMove>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
