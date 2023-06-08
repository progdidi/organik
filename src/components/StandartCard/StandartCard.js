import './standartCard.scss';

const StandartCard = ({category, name, img, link}) => {
    return ( 
        <>
            <a href={link} className="standart">
                <div className="standart__overlay">
                    <img src={img} alt="" className="standart__img" />
                    <h6 className="standart__name">{name}</h6>
                    <p className="standart__category">{category}</p>
                </div>
                
            </a>
        </>
     );
}
 
export default StandartCard;