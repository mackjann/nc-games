import "./CSS/Nav.css";
import "./CSS/Reviews.css";
import "./CSS/ReviewById.css";
import "./CSS/Categories.css";
import "./CSS/Comments.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import ReviewById from "./components/ReviewById";
import Categories from "./components/Categories";
import About from "./components/About";
import ChangeUser from "./components/ChangeUser";
import ReviewsByCat from "./components/ReviewsByCat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/reviews/:reviewID">
            <ReviewById />
          </Route>

          <Route path="/categories/:category">
            <ReviewsByCat />
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
          <Route exact path="/change-user">
            <ChangeUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
