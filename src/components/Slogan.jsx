import React from "react";
import about from "../assets/img/about.jpg";
import {sloganText} from "../constants";

const Intro = () => {
    return (
        <section id="slogan">
            <div class="slogan__inner">
                <h1 class="slogan__title">{sloganText.title}</h1>
                <div class="slogan__text gradient">
                    <div class="text">
                        <div>{sloganText.desc[0]}</div>
                        <div>{sloganText.desc[1]}</div>
                        <div>{sloganText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div class="slogan__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
