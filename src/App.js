import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import QualityPage from "./pages/QualityPage/QualityPage";
import StandartPage from "./pages/StandartPage/StandartPage";
import FarmPage from "./pages/FarmPage/FarmPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage/NewsArticlePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        {/* <MainPage/> */}
        {/* <AboutUsPage/> */}
        {/* <ShopPage/> */}
        {/* <ProductPage/> */}
        {/* <ServicesPage/> */}
        {/* <QualityPage/> */}
        {/* <StandartPage/> */}
        {/* <FarmPage/> */}
        {/* <TeamPage/> */}
        {/* <NewsPage/> */}
        {/* <NewsArticlePage/> */}
        <ContactsPage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
