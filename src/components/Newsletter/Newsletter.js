import bg from './newsletterBg.png';
import './newsletter.scss';

const Newsletter = () => {
    return ( 
        <>
        <div className="newsletter">
            <div className="container">
                <div className="newsletter__inner">
                    <h3 className="newsletter__title">Subscribe to
                    our Newsletter
                    </h3>

                    <div className="newsletter__form">
                        <input type="text" className="newsletter__form-input" placeholder="Your Email Address" />
                        <button className="newsletter__form-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Newsletter;