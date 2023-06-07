import './categoryCard.scss';

const CategoryCard = ({img, name}) => {
    return ( 
        <>
            <div className="category">
                <img src={img} alt="" className="category__img" />
                <p className="category__name">{name}</p>
            </div>
        </>
     );
}
 
export default CategoryCard;