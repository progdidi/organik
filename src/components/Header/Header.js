import logo from './images/logo.svg';
import searchBtn from './images/search.svg';
import cartBtn from './images/cart.svg';

import { useState } from 'react';
import './header.scss';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    return ( 
        <>
        <header className="header">
            <div className="container__fluid">
                <div className="header__inner">
                    <a href="" className="logo"><img src={logo} alt="" className="logo__img" /></a>
                    <nav className="menu">
                        <button className="menu__btn" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className={isNavExpanded ? "menu__list menu__list-active" : "menu__list"}>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Home</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">About</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Pages</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Shop</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Projects</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">News</a></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <form action="" className="search-form">
                            <input type="text" className={isSearchExpanded ? "search-form__input search-form__input-active" : "search-form__input"} />
                            <button className="search-form__btn" onClick={() => {setIsSearchExpanded(!isSearchExpanded);}}>
                                <img src={searchBtn} alt="" className="search-form__btn-img" />
                            </button>
                        </form>

                        <button className="cart">
                            <div className="cart-btn">
                                <img src={cartBtn} alt="" className="cart-btn__img" />
                            </div>
                            Cart(<span>0</span>)
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;