import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

const CheckoutProduct = forwardRef(({ id, title, price, rating, image, hideButton}, ref) => {
     const [state, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div class="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{ title }</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_,i) => <p key={i}>⭐</p>)
                    }
                </div>
                {
                    !hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>
                }
                
            </div>

        </div>
    )
})

export default CheckoutProduct
