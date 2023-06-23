import './productCard.scss';
import star from './star.svg';
import StarRating from '../StarRating/StarRating';

const ProductCard = ({tag, img, name, price, oldprice, rating}) => {
    return ( 
        <>
            <a href="#" className="product-card">
                <p className="product-card__tag">{tag}</p>
                <img src={img} alt="" className="product-card__img" />
                <div className="product-card__about">
                    <h6 className="product-card__name">{name}</h6>
                    <div className="product-card__details">
                        <p className="product-card__price old">${oldprice}</p>
                        <p className="product-card__price">${price}</p>
                        <div className="rating">
                            <StarRating ratingValue={rating}/>
                        </div>
                    </div>
                </div>
                
            </a>
        </>
     );
}
 
export default ProductCard;