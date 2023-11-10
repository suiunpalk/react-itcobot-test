import React from "react";
import {siteText} from "../constants";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">SLOGAN <em>우리의 방향성</em></h2>
                <div className="site__wrap">
                    {siteText.map((site,key)=> (
                        <article className={`site__item s${key+1}`} key={key}>
                        <span className="num">{key+1}</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className="title">
                            {site.title}
                        </h3>

                    </article>
                ))}    
                </div>
            </div>
        </section>
    );
};

export default Site;
