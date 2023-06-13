import './reviewSlider.scss';

const ReviewSlider = ({img, text, author, position}) => {
    return ( 
        <>

        <div className="reviews-slider">
            <div className="reviews-slider__item">
                <img src={img} alt="" className="reviews-slider__item-img" />
                <div className="reviews-slider__item-rating"></div>
                <p className="reviews-slider__item-text">{text}</p>
                <h6 className="reviews-slider__item-author">{author}</h6>
                <p className="reviews-slider__item-position">{position}</p>
            </div>

            <div className="reviews-slider__buttons">
                <button className="reviews-slider__btn active"></button>
                <button className="reviews-slider__btn"></button>
                <button className="reviews-slider__btn"></button>
            </div>
        </div>

        </>
     );
}
 
export default ReviewSlider;