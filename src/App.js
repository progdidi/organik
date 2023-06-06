import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        {/* <MainPage/> */}
        <AboutUsPage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
