import React from "react";
import Header from "../components/Header";
import Quote from "../components/Quote";
import Footer from "../components/Footer2";
import Skip from "../components/Skip";
import Main from "../components/Main";

const Quoteview = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Quote />
        </Main>
        <Footer />
    </>
    );
};

export default Quoteview;