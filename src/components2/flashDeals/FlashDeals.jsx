import React from "react";
import FlaseCard from "./FlaseCard";
function FlashDeals({productItems, addToCart}) {
    return ( 
        <>
            <section className="flash background">
                <div className="container ">
                    <div className="heading f_flex">
                        <i className="fa fa-bolt"></i>
                        <h1>FlashDeals</h1>
                    </div>
                    <FlaseCard productItems = {productItems}  addToCart={addToCart}/>
                </div>
            </section>
        </>
     );
}


export default FlashDeals 