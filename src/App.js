import "./App.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Terms from "./components/Terms";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/terms">
            <Header />
            <Terms />
            <Footer />
          </Route>
          <Route path="/">
            <div id="shape" className="shape"></div>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
