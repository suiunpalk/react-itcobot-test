import React from "react";
import {challengeText} from "../constants";

const Challenge = () => {
    return (
        <section id="challenge">
            <div className="challenge__inner">
                <h2 className="challenge__title">
                    Challenge <em>우리의 도전</em>
                </h2>
                <div className="challenge__desc">
                    {challengeText.map((challenge, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{challenge.title}</h3>
                            <p>{challenge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenge;