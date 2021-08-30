import "./App.scss";
import EarlySupport from "./components/EarlySupport";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToPlay from "./components/HowToPlay";
import LaunchApp from "./components/LaunchApp";

function App() {
  return (
    <div className="App">
      <div id="shape" className="shape"></div>
      <Header />
      <Main />
      <HowToPlay />
      <LaunchApp />
      <EarlySupport />
      <Footer />
    </div>
  );
}

export default App;
