import React, { useEffect, useRef } from "react";

import { roboText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Robo = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                
                invalidateOnRefresh: true,
                anticipatePin: 1,
                },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="robo" ref={horizontalRef}>
            <div className="robo__inner">
                <div className="robo__title">
                    Robotics <em>여러 모양들</em>
                </div>
                <div className="robo__wrap">
                    {roboText.map((robo, key) => (
                        <article 
                            className={`robo__item p${key + 1}`} 
                            key={key} 
                            ref={(el) => (sectionsRef.current[key] = el)
                        }>
                            <span className="num">{robo.num}.</span>
                            <a href={robo.code} target="_blank" className="img" rel="noreferrer">
                                <img src={robo.img} alt={robo.name} />
                            </a>
                            <h3 className="title">{robo.title}</h3>
                            <p className="desc">{robo.desc}</p>            
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Robo;

/*<a href={robo.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>*/