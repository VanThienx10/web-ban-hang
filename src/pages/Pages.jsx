import React from "react";
import Home from "../components2/mainpage/Home";
import FlashDeals from "../components2/flashDeals/FlashDeals";
import TopCate from "../components2/top/TopCate";
import NewArrivals from "../components2/newarrivals/NewArrivals";
import Discount from "../components2/discount/Discount";
import Shop from "../components2/shop/Shop";
import Annocument from "../components2/annocument/Annocument";
import Wrapper from "../components2/wrapper/Wrapper";


function Pages({productItems, cartItem,addToCart,shopItems}) {
    return (  
        <>
            <Home cartItem = {cartItem} />
            <FlashDeals productItems = {productItems} addToCart = {addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems = {shopItems} addToCart = {addToCart} />
            <Annocument />
            <Wrapper />
        </>
    );
}

export default Pages;
