import './productPage.scss';

import example from './images/example.png';
//components
import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

//related
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../helpers/products/products';


const ProductPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Shop Single"
                bgImage={banner}
             />

            <section className="product">
                <div className="container">
                    <div className="product__main">
                        <div className="product__main-media">
                            <div className="product__main-tag">Millets</div>
                            <img src={example} alt="" className="product__main-img" />
                        </div>

                        <div className="product__main-info">
                            <h5 className="product__title">Health Pistachios</h5>
                            <div className="product__rating"></div>
                            <div className="product__price">
                                <p className="product__price-old">$20.00</p>
                                <p className="product__price-new">$13.00</p>
                            </div>

                            <p className="product__descr">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>

                            <div className="product__buy">
                                <div className="product__quantity">
                                    <label htmlFor="" className="product__quantity-label">Quantity :</label>
                                    <input type="text" className="product__quantity-input" placeholder='1'/>
                                </div>
                                

                                <div className="product__buy-btn">Add To Cart</div>
                            </div>
                        </div>
                    </div>
                    <div className="product__add">
                        <div className="product__add-buttons">
                            <button className="product__add-btn descr blue-button">Product Description</button>
                            <button className="product__add-btn info">Additional Info</button>
                        </div>

                        <div className="product__add-info">
                            <p className="product__add-text">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                            <p className="product__add-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi molestiae, voluptate ipsum, cupiditate vel, suscipit fugiat itaque tempora cum provident. Animi qui asperiores at odio sunt deleniti fugit quae.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related">
                <div className="container">
                    <h4 className="related__title">Related Products</h4>
                    <div className="related__items">
                        
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default ProductPage;