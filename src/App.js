import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import QualityPage from "./pages/QualityPage/QualityPage";

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
        <QualityPage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
