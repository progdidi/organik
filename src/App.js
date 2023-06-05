import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Newsletter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
