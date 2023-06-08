import './farmPage.scss';

//images
import banner from './images/banner.jpg';
import farm from './images/farm.jpg';

//components
import Newsletter from '../../components/Newsletter/Newsletter';

const FarmPage = () => {
    return ( 
        <>
            <div className="farm-banner">
                <img src={banner} alt="" className="farm-banner__img" />
            </div>

            <section className="farm">
                <div className="container">
                    <div className="farm__header">
                        <div className="farm__header-main">
                            <h3 className="farm__header-title">Black Raspberry</h3>
                            <p className="farm__header-descr">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                        </div>
                        
                        <table className="farm__info">
                            <tr className="farm__info-item">
                                <td className="farm__info-category">Date :</td>
                                <td className="farm__info-text">December 4, 2022</td>
                            </tr>

                            <tr className="farm__info-item">
                                <td className="farm__info-category">Client :</td>
                                <td className="farm__info-text">Kevin Martin</td>
                            </tr>

                            <tr className="farm__info-item">
                                <td className="farm__info-category">Category  : </td>
                                <td className="farm__info-text">Agriculture , Eco</td>
                            </tr>

                            <tr className="farm__info-item">
                                <td className="farm__info-category">Service     :</td>
                                <td className="farm__info-text">Organic Products</td>
                            </tr>
                        </table>
                    </div>
                    <div className="farm__content">
                        <h5 className="farm__content-title">About The Farm:</h5>
                        <p className="farm__content-text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 

                        </p>
                        <p className="farm__content-text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        <img src={farm} alt="" className="farm__content-img" />

                        <h5 className="farm__content-title">How To Farm:</h5>
                        <p className="farm__content-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <p className="farm__content-text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

                        <h5 className="farm__content-title">Conclusion:</h5>
                        <p className="farm__content-text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <p className="farm__content-text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default FarmPage;