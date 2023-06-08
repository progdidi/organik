import './newsArticlePage.scss';

import banner from './images/example.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

const NewsArticlePage = () => {
    return ( 
        <>
            <section className="article-page">
                <img src={banner} alt="" className="article-page__img" />

                <div className="container">
                    <div className="article-page__header">
                    <div className="article-page__details">
                        <p className="article-page__details-date"> <span>Posted On:</span> January 6, 2022</p>
                        <p className="article-page__details-author">By Rachi Card</p>
                    </div>

                    <h4 className="article-page__header-title">Research More Organic Food</h4>
                    <p className="article-page__header-descr">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    </div>

                    <div className="article-page__content">
                        <p className="article-page__content-text">Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>

                        <h5 className="article-page__content-title">Preferred Form of Vitamin D?</h5>

                        <p className="article-page__content-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                        <ul className="article-page__content-list unordered"> 
 
 
                            <li className="article-page__content-item">Publishing packages and web pageLorem Ipsum as their default</li>
                            <li className="article-page__content-item">Content here, content here', making it look like readable</li>
                            <li className="article-page__content-item">Packages and web pageLorem Ipsum as their default</li>
                        </ul>

                        <div className="article-page__content-quote">“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</div>
                        
                        <h5 className="article-page__content-title">Make perfect organic product with us</h5>

                        <p className="article-page__content-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                        <ol className="article-page__content-list ordered">
                            <li className="article-page__content-item">Publishing packages and web pageLorem Ipsum as their default</li>
                            <li className="article-page__content-item">Content here, content here', making it look like readable</li>
                            <li className="article-page__content-item">Packages and web pageLorem Ipsum as their default</li>
                            <li className="article-page__content-item">more-or-less normal distribution of letters</li>
                        </ol>

                    </div>
                </div>
            </section>
            <Newsletter/>
        </>
     );
}
 
export default NewsArticlePage;