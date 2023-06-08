import './teamPage.scss';

//components
import PagePromo from '../../components/PagePromo/PagePromo';
import banner from './images/banner.jpg';
import Newsletter from '../../components/Newsletter/Newsletter';

//team
import {experts} from '../../helpers/experts/experts';
import ExpertCard from '../../components/ExpertCard/ExpertCard';

const TeamPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Our Team"
                bgImage={banner}
             />

             <section className="team">
                <div className="container">
                    <h6 className="team__subtitle">Team</h6>
                    <h4 className="team__title">Our Organic Experts</h4>
                    <p className="team__descr">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                    <div className="team__items">
                            {experts.map((expert) => {
                            return (
                                <ExpertCard
                                    key={expert.id}
                                    img={expert.img}
                                    name={expert.name} 
                                    position={expert.position}
                                    instagram={expert.instagram}
                                    twit={expert.twitter} 
                                    facebook={expert.facebook}
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
 
export default TeamPage;