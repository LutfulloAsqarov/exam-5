import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../../assets/header/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [shrink, setShrink] = useState(false);
    const [showBar, setShowBar] = useState(false);
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const [showTopHeader, setShowTopHeader] = useState(true);

    let wishlistData = useSelector((state) => state.wishlist.value);
    let cartData = useSelector((state) => state.cart.value);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header__top`}>
                <div className="container header__top__nav">
                    <div className="header__top__left">
                        <select name="language" id="">
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                            <option value="uz">UZ</option>
                        </select>
                        <select name="currency" id="">
                            <option value="usd">USD</option>
                            <option value="rub">RUB</option>
                            <option value="uzs">UZS</option>
                        </select>
                    </div>
                    <div className="header__top__right">
                        <ul className="header__top__list">
                            <li className="header__top__item">
                                <Link>
                                    <FaUser />
                                </Link>
                            </li>
                            <li className="header__top__item">
                                <Link to={"/wishlist"}>
                                    <FaRegHeart />

                                    {wishlistData.length ? (
                                        <sup>{wishlistData.length}</sup>
                                    ) : (
                                        <></>
                                    )}
                                </Link>
                            </li>
                            <li className="header__top__item">
                                <Link to={"/cart"}>
                                    <FaShoppingCart />
                                    {cartData.length ? (
                                        <sup>{cartData.length}</sup>
                                    ) : (
                                        <></>
                                    )}
                                </Link>
                            </li>
                        </ul>
                        <form className="header__top__form">
                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                type="text"
                                placeholder="search..."
                                className={`header__top__input ${
                                    showInput ? "header__top__input-show" : ""
                                }`}
                            />

                            {inputValue ? (
                                <IoCloseCircleOutline
                                    onClick={() => {
                                        setInputValue("");
                                        // setShowInput(false);
                                    }}
                                />
                            ) : (
                                <IoSearch
                                    onClick={() => setShowInput((p) => !p)}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </header>
            <header
                className={`header__bot ${shrink ? "header--shrink" : ""} `}
            >
                <div className="container header__bot__container">
                    <div className="header__bot__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul
                        className={`header__bot__list ${
                            showBar ? "header__bot__show-bar" : ""
                        }`}
                    >
                        <li className="header__bot__items">
                            <NavLink className={"header__bot__link"} to={"/"}>
                                <span>HOME</span>
                            </NavLink>
                        </li>
                        <li className="header__bot__items">
                            <NavLink
                                className={"header__bot__link"}
                                to={"/bags"}
                            >
                                <span>BAGS</span>
                            </NavLink>
                        </li>
                        <li className="header__bot__items">
                            <NavLink
                                className={"header__bot__link"}
                                to={"/sneakers"}
                            >
                                <span>SNEAKERS</span>
                            </NavLink>
                        </li>
                        <li className="header__bot__items">
                            <NavLink
                                className={"header__bot__link"}
                                to={"/belt"}
                            >
                                <span>BELT</span>
                            </NavLink>
                        </li>
                        <li className="header__bot__items">
                            <NavLink
                                className={"header__bot__link"}
                                to={"/contact"}
                            >
                                <span>CONTACT</span>
                            </NavLink>
                        </li>
                        <li
                            className="header__bot__bar-close"
                            onClick={() => setShowBar(false)}
                        >
                            <IoCloseOutline />
                        </li>
                    </ul>
                    {showBar ? (
                        <div
                            className="header__bot__overlay"
                            onClick={() => setShowBar(false)}
                        ></div>
                    ) : (
                        <></>
                    )}
                    <div
                        className="header__bot__bar"
                        onClick={() => setShowBar(true)}
                    >
                        <FaBarsStaggered />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
