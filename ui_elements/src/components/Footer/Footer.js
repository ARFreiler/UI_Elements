import React from 'react';

import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <div className="icon">
                    <a href="https://twitter.com/AshleighFreiler"><FaTwitter size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/ARFreiler"><FaGithub size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://linkedin.com/in/ashleighfreiler"><FaLinkedin size={30} /></a>
                </div>
            </div>
            <p className="copyright">
                RoseAshTech © 2021 LLC. All Rights Reserved
            </p>
        </div >
    )
}

export default Footer;