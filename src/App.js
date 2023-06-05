import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <MainPage/>
        <Newsletter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
