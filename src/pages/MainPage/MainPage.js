import './mainPage.scss';
import aboutImg from './images/about/about.png';
import aboutItem1 from './images/about/item1.svg';
import aboutItem2 from './images/about/item2.svg';
import Newsletter from '../../components/Newsletter/Newsletter';

//products
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../helpers/products/products';

//reviews

//eco
import ecoImg from './images/eco/eco.png';

//news
import NewsArticle from '../../components/NewsArticle/NewsArticle';

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
                        <div className="about__items">
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
                        </div>
                        

                        <a href="" className="about__link">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>
 
        <section className="products">
            <div className="container">
                <h6 className="products__subtitle">Categories </h6>
                <h4 className="products__title">Our Products</h4>
                <div className="products__items">
                    {products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                tag={product.tag}
                                name={product.title} 
                                price={product.price}
                                oldprice={product.oldprice}
                                img={product.img} 
                                link={product.link}
                            />
                        )                            
                    })}
                </div>
                <button className="products__btn">Load More</button>
            </div>
        </section>

        <section className="review">
            <div className="container">
                <div className="review__inner">
                    <h6 className="review__subtitle">Testimonial </h6>
                    <h4 className="review__title">What Our Customer Saying?</h4>
                    <div className="review__slider"></div>
                    <div className="review__numbers">
                        <div className="review__number">
                            <h5 className="review__number-title">100%</h5>
                            <p className="review__number-text">Organic</p>
                        </div>
                        <div className="review__number">
                            <div className="review__number-round">
                                <h5 className="review__number-title">285</h5>
                                <p className="review__number-text">Active Product</p>
                            </div>
                            
                        </div>
                        <div className="review__number">
                            <h5 className="review__number-title">350+</h5>
                            <p className="review__number-text">Organic Orchads</p>
                        </div>
                        <div className="review__number">
                            <h5 className="review__number-title">25+</h5>
                            <p className="review__number-text">Years of Farming</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <section className="offer">
            <div className="container">
                <div className="offer__top">
                    <div className="offer__top-left">
                        <h6 className="offer__subtitle">Offer </h6>
                        <h4 className="offer__title">We Offer Organic For You</h4>
                    </div>
                    
                    <button className="offer__btn">View All Product</button>
                </div>
                

                <div className="offer__items">
                    {products.map((product) => {
                            if(product.offer === true) {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        tag={product.tag}
                                        name={product.title} 
                                        price={product.price}
                                        oldprice={product.oldprice}
                                        img={product.img} 
                                        link={product.link}
                                    />
                                ) 
                            }
                                                       
                        })}
                </div>
            </div>
        </section>

        <section className="eco">
            <div className="container__fluid">
                <div className="eco__inner">
                    <img src={ecoImg} alt="" className="eco__img" />
                    <div className="eco__info">
                        <h6 className="eco__info-subtitle">Eco Friendly </h6>
                        <h4 className="eco__info-title">Econis is a Friendly Organic Store</h4>

                        <div className="eco__item">
                            <h6 className="eco__item-title">Start with Our Company First</h6>
                            <p className="eco__item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="eco__item">
                            <h6 className="eco__item-title">Learn How to Grow Yourself</h6>
                            <p className="eco__item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="eco__item">
                            <h6 className="eco__item-title">Farming Strategies of Today</h6>
                            <p className="eco__item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* 
        <div className="categories">
            <div className="container__fluid">
                <div className="categories__items">
                    <a href="" className="categories__item categories__item-one">
                        <p className="categories__item-text">Organic Juice</p>
                    </a>
                    <a href="" className="categories__item categories__item-two">
                        <p className="categories__item-text">Organic Food</p>
                    </a>
                    <a href="" className="categories__item categories__item-three">
                        <p className="categories__item-text">Nuts Cookis</p>
                    </a>
                </div>
            </div>
        </div>

        <section className="news">
            <div className="container">
                <div className="news__top">
                <div className="news__top-left">
                        <h6 className="news__subtitle">News </h6>
                        <h4 className="news__title">Discover weekly content about organic food, & more</h4>
                    </div>
                    
                    <button className="news__btn">More News</button>
                </div>

                <div className="news__items">
                    
                </div>
            </div>
        </section>
*/}
        <Newsletter/>

        </>
     );
}
 
export default MainPage;