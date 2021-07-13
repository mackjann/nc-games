import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Categories from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ChangeUser from "./components/ChangeUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/change-user">
            <ChangeUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
