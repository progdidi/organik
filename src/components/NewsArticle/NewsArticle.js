import './newsArticle.scss';

const NewsArticle = () => {
    return ( 
        <>
        <div class="news-article">
            <p class="news-article__date">25 Nov</p>
            <div class="news-article__info">
                <p class="news-article__info-author">By Rachi Card</p>
                <h6 class="news-article__info-title">The Benefits of Vitamin D & How to Get It</h6>
                <p class="news-article__info-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <button class="news-article__info-btn">Read More</button>
            </div>
        </div>
        </>
     );
}
 
export default NewsArticle;