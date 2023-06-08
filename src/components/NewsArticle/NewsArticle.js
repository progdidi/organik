import './newsArticle.scss';

const NewsArticle = ({date, author, title, descr, link}) => {
    return ( 
        <>
        <div class="news-article">
            <p class="news-article__date">{date}</p>
            <div class="news-article__info">
                <p class="news-article__info-author">By {author}</p>
                <h6 class="news-article__info-title">{title}</h6>
                <p class="news-article__info-text">{descr}</p>
                <a href={link} class="news-article__info-btn">Read More</a>
            </div>
        </div>
        </>
     );
}
 
export default NewsArticle;