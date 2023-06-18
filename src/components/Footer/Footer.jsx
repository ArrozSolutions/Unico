import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import "./Footer.scss";
import Payment from "../../assets/payments.png"
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp
} from "react-icons/fa";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="fotcol">
                <div className="fottitle">UNICO FOODS</div>
                <div className="fottext link"><span className="social-icons">
                    <Link to ="https://www.linkedin.com/company/unico-foods/?viewAsMember=true"className="icon" >
                        <FaLinkedinIn size={14} />
                    </Link>
                    <Link to="https://www.facebook.com/people/UNICO-FOODS/100087934491728/?mibextid=LQQJ4d" className="icon">
                        <FaFacebookF size={14} />
                    </Link>
                    <Link to="https://twitter.com/unico_foods" className="icon">
                        <FaTwitter size={14} />
                    </Link>
                    <Link to="https://www.instagram.com/" className="icon">
                        <FaInstagram size={14} />
                    </Link>
                    <Link to="https://api.whatsapp.com/send?phone=919669559988&text=Hello" className="icon">
                        <FaWhatsapp  size={14} />
                    </Link>
                </span></div>
            </div>
            <div className="fotcol">
                <div className="fottitle">About</div>
                <div className="fottext link">Welcome to the world of wholesome and nutritious breakfasts! At UNICO FOODS, we believe that the key to a great day starts with a nutritious and delicious breakfast. That's why we're proud to offer a wide variety of millet-based breakfast options that are sure to please even the most discerning palate.</div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="fottext">
                        Sadar, Near Kali Mandir, Jabalpur MP,482001
                    </div>
                </div>
                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="fottext">
                        Phone : 1234567890
                    </div>
                </div>
                <div className="c-items">
                    <FaEnvelope/>
                    <div className="fottext">
                        Email : sample@gmail.com
                    </div>
                </div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Pages</div>
                <span className="fottext"><Link className="link" to="/login">Login</Link></span>
                <span className="fottext"><Link className="link" to="/contact">Contact us</Link></span>
                <span className="fottext"><Link className="link" to="/signup">Sign up</Link></span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="fottext">
                Developed by <Link className="link"  to="https://www.linkedin.com/company/arroz-solution/">Arroz Solutions</Link>
                <p className="d-none">Developed By Shivansh Mehta <Link to="https://www.linkedin.com/in/shivanshmehtaa/">LinkedIN</Link> </p>
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
