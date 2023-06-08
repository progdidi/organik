import './socialList.scss';

//images
import instagram from './images/instagram.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import pinterest from './images/pinterest.svg';


const SocialList = () => {
    return ( 
        <>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <img src={instagram} alt="" className="social-list__link-img" />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <img src={facebook} alt="" className="social-list__link-img" />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <img src={twitter} alt="" className="social-list__link-img" />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <img src={pinterest} alt="" className="social-list__link-img" />
                    </a>
                </li>
            </ul>
        </>
     );
}
 
export default SocialList;