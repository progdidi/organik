import './aboutUsPage.scss';
import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.png';

//items
import item1 from './images/aboutItem1.png';
import item2 from './images/aboutItem2.png';

//benefits
import benefit1 from './images/benefit1.svg';
import benefit2 from './images/benefit2.svg';

//reasons
import reason1 from './images/reason1.svg';
import reason2 from './images/reason2.svg';
import reason3 from './images/reason3.svg';
import reason4 from './images/reason4.svg';

const AboutUsPage = () => {
    return ( 
        <>
            <PagePromo 
                title="About us"
                bgImage={banner}
             />

            <section className="about-us">
                    <div className="about-us__item about-us__item-first">
                        <div className="container">
                            <div className="about-us__item-inner">
                                <img src={item1} alt="" className="about-us__item-img" />
                                <div className="about-us__item-info">
                                    <h6 className="about-us__item-subtitle">About Us </h6>
                                    <h4 className="about-us__item-title">We do Creative Things for Success</h4>
                                    <p className="about-us__item-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                    <p className="about-us__item-text">
                                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                    </p>

                                    <div className="benefits">
                                        <div className="benefits__item">
                                            <img src={benefit1} alt="" className="benefits__item-img" />
                                            <p className="benefits__item-descr">Modern Agriculture Equipment </p>
                                        </div>
                                        <div className="benefits__item">
                                            <img src={benefit2} alt="" className="benefits__item-img" />
                                            <p className="benefits__item-descr">No growth hormones are used</p>
                                        </div>
                                    </div>
                                    <button className="about-us__item-btn">Explore More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="about-us__item about-us__item-second">
                        <div className="container">
                            <div className="about-us__item-inner">
                                <img src={item2} alt="" className="about-us__item-img" />
                                <div className="about-us__item-info">
                                    <h6 className="about-us__item-subtitle">Why Choose us? </h6>
                                    <h4 className="about-us__item-title">We do not buy from the open market & traders.</h4>
                                    <p className="about-us__item-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="reasons">
                        <div className="reasons__item">
                            <img src={reason1} alt="" className="reasons__item-img" />
                            <h6 className="reasons__item-title">Return Policy</h6>
                            <p className="reasons__item-text">Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="reasons__item">
                            <img src={reason2} alt="" className="reasons__item-img" />
                            <h6 className="reasons__item-title">100% Fresh</h6>
                            <p className="reasons__item-text">Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="reasons__item">
                            <img src={reason3} alt="" className="reasons__item-img" />
                            <h6 className="reasons__item-title">Support 24/7</h6>
                            <p className="reasons__item-text">Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className="reasons__item">
                            <img src={reason4} alt="" className="reasons__item-img" />
                            <h6 className="reasons__item-title">Secured Payment</h6>
                            <p className="reasons__item-text">Simply dummy text of the printintypesetting industry.</p>
                        </div>
                    </div>
            </section>
        </>
     );
}
 
export default AboutUsPage;