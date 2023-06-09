import logo from './images/logo.svg';
import './footer.scss';

import SocialList from '../SocialList/SocialList';

const Footer = () => {
    return ( 
        <>
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top-inner">
                        <div className="footer__contacts">
                        <h4 className="footer__title">Contact Us</h4>
                        <div className="footer__contacts-items">
                            <div className="footer__contacts-item">
                                <h6 className="footer__contacts-title">Email</h6>
                                <a href="" className="footer__contacts-text">needhelp@Organia.com</a>
                            </div>
                            <div className="footer__contacts-item">
                                <h6 className="footer__contacts-title">Phone</h6>
                                <a href="" className="footer__contacts-text">666 888 888</a>
                            </div>
                            <div className="footer__contacts-item">
                                <h6 className="footer__contacts-title">Address</h6>
                                <p className="footer__contacts-text">88 road, borklyn street, USA</p>
                            </div>
                        </div>
                        
                        </div>

                        <div className="footer__info">
                            <img src={logo} alt="" className="footer__info-img" />
                            <p className="footer__info-text">Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing </p>

                            <SocialList/>

                        </div>

                        <nav className="footer__menu">
                            <h4 className="footer__title">Utility Pages</h4>
                            <ul className="footer__menu-list">
                                <li className="footer__menu-item"><a href="" className="footer__menu-link">Style Guide</a></li>
                                <li className="footer__menu-item"><a href="" className="footer__menu-link">404 Not Found</a></li>
                                <li className="footer__menu-item"><a href="" className="footer__menu-link">Password Protected</a></li>
                                <li className="footer__menu-item"><a href="" className="footer__menu-link">Licences</a></li>
                                <li className="footer__menu-item"><a href="" className="footer__menu-link">Changelog</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>

            <div className="footer__policy">
                <div className="container">
                    <p className="footer__policy-text">Copyright © <span>Organick</span>  | Designed by <span>VictorFlow</span>  Templates - Powered by <span>Webflow</span> </p>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;