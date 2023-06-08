import './standartPage.scss';

//components
import PagePromo from '../../components/PagePromo/PagePromo';
import Newsletter from '../../components/Newsletter/Newsletter';


//images
import banner from './images/banner.jpg';


//standarts
import StandartCard from '../../components/StandartCard/StandartCard';
import { standarts } from '../../helpers/standarts/standarts';

const StandartPage = () => {
    return ( 
        <>
            <PagePromo 
                title="Portfolio Standard"
                bgImage={banner}
             />

             <section className="standarts">
                <div className="container">
                    <div className="standarts__items">
                        {standarts.map((standart) => {
                            return (
                                <StandartCard
                                    key={standart.id}
                                    category={standart.category}
                                    name={standart.name} 
                                    img={standart.img} 
                                    link={standart.link}
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
 
export default StandartPage;