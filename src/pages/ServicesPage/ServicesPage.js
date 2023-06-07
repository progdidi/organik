import './servicesPage.scss';

import PagePromo from '../../components/PagePromo/PagePromo';

//images
import banner from './images/banner.jpg';
import agric from './images/agric.svg';
import dairy from './images/dairy.svg';
import delivery from './images/delivery.svg';
import fresh from './images/fresh.svg';
import mainImg from './images/mainImg.png';
import organic from './images/organic.svg';
import store from './images/store.svg';
import play from './images/play.svg';

const ServicesPage = () => {
    return ( 
        <>
             <PagePromo 
                title="Shop Single"
                bgImage={banner}
             />

             <section className="services">
                <div className="container">
                    <h6 className="services__subtitle">What we Grow</h6>
                    <h4 className="services__title">Better Agriculture for Better Future</h4>

                    <div className="services__inner">
                        <div className="services__items left">
                            <div className="services__item">
                                <img src={dairy} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Dairy Products</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>

                            <div className="services__item">
                                <img src={store} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Store Services</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>

                            <div className="services__item">
                                <img src={delivery} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Delivery Services</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>
                        </div>

                        <div className="services__media">
                            <img src={mainImg} alt="" className="services__media-img" />
                        </div>
                        <div className="services__items right">
                            <div className="services__item">
                                <img src={agric} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Agricultural Services</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>

                            <div className="services__item">
                                <img src={organic} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Organic Products</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>

                            <div className="services__item">
                                <img src={fresh} alt="" className="services__item-img" />
                                <h6 className="services__item-title">Fresh Vegetables</h6>
                                <p className="services__item-descr">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                            </div>
                        </div>
                    </div>

                    <button className="services__button">Explore More</button>
                </div>
             </section>

             <section className="video">
                <div className="container">
                    <h6 className="video__subtitle">Organic Only</h6>
                    <h4 className="video__title">Everyday Fresh & Clean</h4>
                    <p className="video__descr">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
                    <button className="video__btn">
                        <img src={play} alt="" className="video__btn-img" />
                    </button>
                </div>
             </section>
        </>
     );
}
 
export default ServicesPage;