import './newsPage.scss';

import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

//news
import NewsArticle from '../../components/NewsArticle/NewsArticle';
import { news } from '../../helpers/news/news';

const NewsPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Recent News"
                bgImage={banner}
             />

            <section className="news-page">
                <div className="container">
                    <div className="news-page__items">
                        {news.map((news) => {
                            return (
                                <NewsArticle
                                    key={news.id}
                                    date={news.date}
                                    author={news.author} 
                                    title={news.title} 
                                    descr={news.descr} 
                                    link={news.link}
                                    cover={news.cover}
                                />
                            )                            
                        })}
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
     );
}
 
export default NewsPage;