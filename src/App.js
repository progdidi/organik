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
          <Route path="/" element={<MainPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/quality" element={<QualityPage/>} />
          <Route path="/standart" element={<StandartPage/>} />
          <Route path="/farm" element={<FarmPage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/newsarticle" element={<NewsArticlePage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/license" element={<LicensePage/>} />
          <Route path="/changelog" element={<ChangelogPage/>} />
          <Route path="/protected" element={<ProtectedPage/>} />
        </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
