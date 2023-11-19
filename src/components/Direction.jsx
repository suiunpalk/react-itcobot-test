import React from "react";
import {directionText} from "../constants";

const Site = () => {
    return (
        <section id="direction">
            <div className="direction__inner">
                <h2 className="direction__title">SLOGAN <em>우리의 방향성</em></h2>
                <div className="direction__wrap">
                    {directionText.map((direction,key)=> (
                        <article className={`direction__item s${key+1}`} key={key}>
                        <span className="num">{key+1}</span>
                        <div className="text">
                            <div>{direction.text[0]}</div>
                            <div>{direction.text[1]}</div>
                            <div>{direction.text[2]}</div>
                        </div>
                        <h3 className="title">
                            {direction.title}
                        </h3>

                    </article>
                ))}    
                </div>
            </div>
        </section>
    );
};

export default Site;
