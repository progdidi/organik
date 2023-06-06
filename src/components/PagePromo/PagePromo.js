import './pagePromo.scss';

const PagePromo = ({title, bgImage}) => {
    return ( 
        <>
            <div className="page-promo" 
                style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <h3 className="page-promo__title">{title}</h3>
            </div>
        </div>
        </>
     );
}
 
export default PagePromo;