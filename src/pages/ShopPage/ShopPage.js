import './shopPage.scss';

//components
import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

//catalog
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../helpers/products/products';

const ShopPage = () => {
    return ( 
        <>
           <PagePromo 
                title="Shop"
                bgImage={banner}
             />

            <section className="catalog">
                <div className="container">
                    <div className="catalog__items">
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
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default ShopPage;