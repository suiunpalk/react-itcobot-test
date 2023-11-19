import React from "react";

import { footerText } from "../constants";

const Footer2 = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div></div>
                    <div></div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/" >Back to the home</a>
                        </div>
                        <p className="desc">메인 페이지로 돌아가기</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2023 ITCOBOT<br />
                    대표: 임주연 | 전화번호 : 000-0000-0000
                </div>
            </div>
        </footer>
    )
}

export default Footer2;