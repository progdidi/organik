import './categoryCard.scss';

const CategoryCard = ({img, name}) => {
    return ( 
        <>
            <div className="category">
                <div className="category__media">
                    <img src={img} alt="" className="category__img" />
                </div>
                <p className="category__name">{name}</p>
            </div>
        </>
     );
}
 
export default CategoryCard;