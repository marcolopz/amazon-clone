import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from "./firebase"
import { useStateValue } from "./StateProvider"
import Order from "./Order"

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        if(user){
            console.log(user.uid)
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('create', 'desc')
            .onSnapshot(snapshot => {
                console.log(snapshot)
                setOrders(snapshot.docs.map(doc => ({
                    id : doc.id,
                    data: doc.data()
                })))
            })
        } else {
            setOrders([])
        }
        
    }, [user])
    
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {
                    orders?.map( order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
