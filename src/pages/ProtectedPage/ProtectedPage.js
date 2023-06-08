import './protectedPage.scss';

import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';
import protectedImg from './images/protected.png';

const ProtectedPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Licenses"
                bgImage={banner}
            />

            <div className="protected">
                <div className="container">
                    <div className="protected__content">
                        <img src={protectedImg} alt="" className="protected__content-img" />

                        <form action="" className="protected__form">
                            <label htmlFor="" className="protected__form-label"> Password
                                <input type="text" className="protected__form-input" placeholder='Enter Your Password'/>
                            </label>

                            <button className="protected__form-btn">Send Now</button>
                        </form>
                    </div>
                </div>
            </div>

            <Newsletter/>
        </>
     );
}
 
export default ProtectedPage;