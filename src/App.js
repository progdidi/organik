import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LicensePage from "./pages/LicensePage/LicensePage";
import ChangelogPage from "./pages/ChangelogPage/ChangelogPage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <main className="main"> 
        <Routes>
          <Route path="/organik/" element={<MainPage/>} />
          <Route path="/organik/aboutus" element={<AboutUsPage/>} />
          <Route path="/organik/shop" element={<ShopPage/>} />
          <Route path="/organik/product" element={<ProductPage/>} />
          <Route path="/organik/services" element={<ServicesPage/>} />
          <Route path="/organik/quality" element={<QualityPage/>} />
          <Route path="/organik/standart" element={<StandartPage/>} />
          <Route path="/organik/farm" element={<FarmPage/>} />
          <Route path="/organik/team" element={<TeamPage/>} />
          <Route path="/organik/news" element={<NewsPage/>} />
          <Route path="/organik/newsarticle" element={<NewsArticlePage/>} />
          <Route path="/organik/contacts" element={<ContactsPage/>} />
          <Route path="/organik/error" element={<ErrorPage/>} />
          <Route path="/organik/license" element={<LicensePage/>} />
          <Route path="/organik/changelog" element={<ChangelogPage/>} />
          <Route path="/organik/protected" element={<ProtectedPage/>} />
        </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
