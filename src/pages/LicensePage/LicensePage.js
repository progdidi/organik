import './licensePage.scss';

import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

const LicensePage = () => {
    return ( 
        <>
            <PagePromo 
                title="Licenses"
                bgImage={banner}
            />

            <section className="license">
                <div className="container">
                    <div className="license__inner">
                        <div className="license__item">
                            <h5 className="license__item-title">Icon & Graphics</h5>
                            <div className="license__item-content">
                                <p className="license__item-text">Icons and Graphics are manually designed by the VictorFlow Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                                <p className="license__item-text">Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>

                            </div>
                        </div>

                        <div className="license__item">
                            <h5 className="license__item-title">Photography</h5>
                            <div className="license__item-content">
                                <p className="license__item-text">All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>

                                <h6 className="license__item-subtitle">Unsplash</h6>
                                <p className="license__item-text">Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,</p>

                                <h6 className="license__item-subtitle">Pixcel</h6>
                                <p className="license__item-text">Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, </p>
                            </div>
                        </div>

                        <div className="license__item">
                            <h5 className="license__item-title">Font</h5>
                            <div className="license__item-content">
                                <p className="license__item-text"> Organick template uses free licensed Google Fonts. Please check <span> Roboto, Yellowtail</span> and <span>Open Sans</span> .</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default LicensePage;