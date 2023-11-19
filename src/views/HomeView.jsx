import React from "react";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import Challenge from "../components/Challenge"
import Direction from "../components/Direction";
import Robo from "../components/Robo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const Homeview = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Slogan />
            <Challenge />
            <Direction />
            <Robo />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default Homeview;