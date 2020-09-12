import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'
function Header() {
    const [{basket, user}, dispatch] = useStateValue()

    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"                
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt="amazon"
                />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" 
                        type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionsLineOne">{user? user.email:'Hello Guest'}</span>
                        <span className="header__optionsLineTwo">{ user ? 'Sign out':'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionsLineOne">Returns</span>
                        <span className="header__optionsLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionsLineOne">Your</span>
                    <span className="header__optionsLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon  className="header__basket"/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
