import './changelogPage.scss';

import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';
import changelog from './images/changelog.png';

const ChangelogPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Changelog"
                bgImage={banner}
            />

            <div className="changelog">
                <div className="container">
                    <div className="changelog__content">
                        <img src={changelog} alt="" className="changelog__content-img" />
                        <p className="changelog__content-text"> <span>V.1</span> Initial Organick Webflow Template Release</p>
                    </div>
                </div>
            </div>

            <Newsletter/>
        </>
     );
}
 
export default ChangelogPage;