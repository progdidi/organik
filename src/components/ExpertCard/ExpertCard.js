import './expertCard.scss';
import fb from './images/fb.svg';
import inst from './images/inst.svg';
import twitter from './images/twitter.svg';

const ExpertCard = ({img, name, position, instagram, twit, facebook}) => {
    return ( 
        <>
            <div className="expert">
                <img src={img} alt="" className="expert__img" />
                <div className="expert__about">
                    <h6 className="expert__about-name">{name}</h6>
                    <p className="expert__about-position">{position}</p>
                    <div className="expert__social">
                        <ul className="expert__social-list">
                            <li className="expert__social-item">
                                <a href={instagram} className="expert__social-link"><img src={inst} alt="" className="expert__social-img" /></a>
                            </li>
                            <li className="expert__social-item">
                                <a href={facebook} className="expert__social-link"><img src={fb} alt="" className="expert__social-img" /></a>
                            </li>
                            <li className="expert__social-item">
                                <a href={twit} className="expert__social-link"><img src={twitter} alt="" className="expert__social-img" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ExpertCard;