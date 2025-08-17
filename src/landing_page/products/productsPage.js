import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage(){
    return (
        <>
            <Hero/>
            <LeftSection imageURL="media/images/kite.png" prodTitle="Kite"  prodDesp="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
            <RightSection prodTitle="Console" prodDesp="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="" imageURL="media/images/console.png"/>
            <LeftSection imageURL="media/images/coin.png" prodTitle="Coin"  prodDesp="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
            <RightSection prodTitle="Kite Connect API" prodDesp="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" imageURL="media/images/kiteconnect.png"/>
            <LeftSection imageURL="media/images/varsity.png" prodTitle="Varsity mobile"  prodDesp="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" link="" googlePlay="" appStore=""/><br/>
            <p className="fs-4 text-center p-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p><br/>
            <Universe/>
        </>
    );
}

export default ProductsPage;