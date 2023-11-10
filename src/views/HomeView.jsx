import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill"
import Site from "../components/Site";
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
            <Intro />
            <Skill />
            <Site />
            <Robo />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default Homeview;