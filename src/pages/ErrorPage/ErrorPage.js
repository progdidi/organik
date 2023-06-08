import './errorPage.scss';

import error from './images/404.svg';

const ErrorPage = () => {
    return ( 
        <>
            <section className="error">
                <div className="container">
                    <div className="error__inner">
                        <img src={error} alt="" className="error__img" />
                        <h4 className="error__title">Page not found</h4>
                        <p className="error__descr">The page you are looking for doesn't exist or has been moved</p>
                        <a href="" className="error__link">Go to Homepage</a>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ErrorPage;