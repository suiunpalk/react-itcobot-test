import React from "react";

import { quoteText } from "../constants";

const Quote = () => {
    return (
        <section id="quote">
            <div className="quote__inner">
                <h2 className="quote__title">Contact</h2>
              
                <div className="quote__text gradient">
                    <div className="text">
                        {quoteText.map((quote, key) => (
                            <div key={key}>
                                <a 
                                    href={quote.link} 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    {quote.title}
                                </a>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote