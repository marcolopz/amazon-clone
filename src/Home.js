import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3tWzHwW_neONyfODCL833HQAsVbnDo9CGz7XwZPo9lUkVblN-8VGe1N_E"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id={1} 
                        title="product 1"
                        price={9.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                    />
                    <Product 
                        id={2}
                        title="product 2"
                        price={19.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />                   
                    
                </div>
                <div className="home__row">
                    <Product
                        id={3} 
                        title="product 2"
                        price={19.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />
                    <Product 
                        id={4}
                        title="product 2"
                        price={19.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />  
                    <Product
                        id={5} 
                        title="product 2"
                        price={19.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />  
                </div>
                <div className="home__row">
                    <Product 
                        id={6}
                        title="product 2"
                        price={19.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />                     
                </div>
            </div>
        </div>
    )
}

export default Home
