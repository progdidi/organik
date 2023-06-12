import './contactsPage.scss';

//components
import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';
import SocialList from '../../components/SocialList/SocialList';

//images
import contactsImg from './images/contactsPage.jpg';
import contactsImg2 from './images/contactsPage2.jpg';
import mail from './images/mail.svg';
import phone from './images/phone.svg';

const ContactsPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Contact Us"
                bgImage={banner}
            />

            <section className="contacts">
                <div className="container">
                    <div className="contacts__inner">
                        <div className="contacts__media">
                            <img src={contactsImg} alt="" className="contacts__media-img" />
                        </div>

                        <div className="contacts__info">
                            <h4 className="contacts__info-title">We'd love to talk about how we can work together.</h4>
                            <p className="contacts__info-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                            <div className="contacts__item">
                                <img src={mail} alt="" className="contacts__item-img" />
                                <div className="contacts__item-info">
                                    <h6 className="contacts__item-title">Massege </h6>
                                    <a href="mail:support@organic.com" className="contacts__item-link">support@organic.com</a>
                                </div>
                                
                            </div>

                            <div className="contacts__item">
                                <img src={phone} alt="" className="contacts__item-img" />
                                <div className="contacts__item-info">
                                    <h6 className="contacts__item-title">Contact Us</h6>
                                    <a href="tel:01123456789" className="contacts__item-link">+01 123 456 789</a>
                                </div>
                                
                            </div>

                            <div className="contacts__social">
                                <SocialList/>
                            </div>

                            
                        </div>
                    </div>
                    
                </div>
            </section>
 
            <section className="location">
                <div className="container">
                    <div className="location__inner">
                        <div className="location__content">
                            <h6 className="location__subtitle">Location</h6>
                            <h4 className="location__title">Our Farms</h4>
                            <p className="location__descr">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>

                            <div className="location__item">
                                <h6 className="location__item-title">New York, USA:</h6>
                                <p className="location__item-address">299 Park Avenue New York, <br/>
                                    New York 10171</p>
                            </div>

                            <div className="location__item">
                                <h6 className="location__item-title">London, UK:</h6>
                                <p className="location__item-address">30 Stamford Street, <br/> London SE1 9LQ</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <div className="contacts-form">
                <div className="container">
                    <form action="" className="contacts-form__content">
                        <label htmlFor="" className="contacts-form__label"> Full Name*
                            <input type="text" className="contacts-form__input" placeholder=""/>
                        </label>

                        <label htmlFor="" className="contacts-form__label"> Your Email*
                            <input type="text" className="contacts-form__input" placeholder="example@yourmail.com"/>
                        </label>

                        <label htmlFor="" className="contacts-form__label"> Company*
                            <input type="text" className="contacts-form__input" placeholder="yourcompany name here"/>
                        </label>

                        <label htmlFor="" className="contacts-form__label"> Subject*
                            <input type="text" className="contacts-form__input" placeholder="how can we help"/>
                        </label>

                        <label htmlFor="" className="contacts-form__label text"> Message*
                            <textarea name="" id="" cols="30" rows="10" className="contacts-form__text" placeholder="hello there,i would like to talk about how to..."></textarea>
                        </label>

                        <button className="contacts-form__btn">Send Message</button>

                    </form>
                </div>
            </div>
    
            <Newsletter/>
        </>
     );
}
 
export default ContactsPage;