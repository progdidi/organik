import './productCard.scss';
import example from './example.png';
import star from './star.svg';

const ProductCard = ({tag, img, name, price, oldprice}) => {
    return ( 
        <>
            <a href="#" className="product-card">
                <p className="product-card__tag">{tag}</p>
                <img src={img} alt="" className="product-card__img" />
                <h6 className="product-card__name">{name}</h6>
                <div className="product-card__about">
                    <p className="product-card__price old">${oldprice}</p>
                    <p className="product-card__price">${price}</p>
                    <div className="rating">
                        <img src={star} alt="" className="rating__star" />
                    </div>
                </div>
            </a>
        </>
     );
}
 
export default ProductCard;