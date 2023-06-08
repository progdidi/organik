import './qualityPage.scss';

//components
import PagePromo from '../../components/PagePromo/PagePromo';
import Newsletter from '../../components/Newsletter/Newsletter';

//images
import banner from './images/banner.jpg';
import main from './images/main.jpg';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';


const QualityPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Quality Standard"
                bgImage={banner}
             />

            <section className="quality">
                <div className="container">
                    <img src={main} alt="" className="quality__img" />

                    <div className="quality__content">
                        <h4 className="quality__title">Organic Store Services</h4>
                        <p className="quality__text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <p className="quality__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

                        <div className="quality__item">
                            <img src={item1} alt="" className="quality__item-img" />
                            <div className="quality__item-info">
                                <h6 className="quality__item-title">Why Organic</h6>
                                <p className="quality__item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                        </div>

                        <div className="quality__item">
                            <img src={item2} alt="" className="quality__item-img" />
                            <div className="quality__item-info">
                                <h6 className="quality__item-title">Speciality Produce</h6>
                                <p className="quality__item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                        </div>

                        <div className="farm">
                            <h5 className="farm__title">We farm your land</h5>
                            <p className="farm__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                            <div className="farm__items">
                                <div className="farm__item">
                                    <p className="farm__item-number">01</p>
                                    <p className="farm__item-descr">Best quality support</p>
                                </div>
                                <div className="farm__item">
                                    <p className="farm__item-number">02</p>
                                    <p className="farm__item-descr">Money back guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default QualityPage;