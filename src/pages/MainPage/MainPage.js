import './mainPage.scss';
import aboutImg from './images/about/about.png';
import aboutItem1 from './images/about/item1.svg';
import aboutItem2 from './images/about/item2.svg';

const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <h5 className="promo__subtitle">100% Natural Food</h5>
                <h1 className="promo__title">Choose the best healthier way of life</h1>
                <a href="" className="promo__link">Explore Now</a>
            </div>
        </section>

        <div className="posters">
            <div className="container">
                <div className="posters__inner">
                    <div className="posters__item posters__item-one">
                        <h6 className="posters__item-subtitle">Natural!!</h6>
                        <h4 className="posters__item-title">Get Garden Fresh Fruits</h4>
                    </div>
                    <div className="posters__item posters__item-two">
                        <h6 className="posters__item-subtitle">Offer!!</h6>
                        <h4 className="posters__item-title">Get 10% off on Vegetables</h4>
                    </div>
                </div>
            </div>
        </div>

        <section className="about">
            <div className="container">
                <div className="about__inner">
                    <img src={aboutImg} alt="" className="about__img" />
                    <div className="about__info">
                        <h6 className="about__info-subtitle">About Us</h6>
                        <h4 className="about__info-title">We Believe in Working Accredited Farmers</h4>
                        <p className="about__info-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                        <div className="about__item">
                            <img src={aboutItem1} alt="" className="about__item-img" />
                            <div className="about__item-info">
                                <h6 className="about__item-title">Organic Foods Only</h6>
                                <p className="about__item-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="about__item">
                            <img src={aboutItem2} alt="" className="about__item-img" />
                            <div className="about__item-info">
                                <h6 className="about__item-title">Quality Standards</h6>
                                <p className="about__item-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <a href="" className="about__link">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories">
            <div className="container">
                <h6 className="categories__subtitle">Categories </h6>
                <h4 className="categories__title">Our Products</h4>
                <div className="categories__items">

                </div>
                <button className="categories__btn">Load More</button>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;