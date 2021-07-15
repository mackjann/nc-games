import "./CSS/Nav.css";
import "./CSS/Reviews.css";
import "./CSS/ReviewById.css";
import "./CSS/Categories.css";
import "./CSS/Comments.css";
import "./CSS/ChangeUser.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import ReviewById from "./components/ReviewById";
import Categories from "./components/Categories";
import About from "./components/About";
import ReviewsByCat from "./components/ReviewsByCat";
import { UserContext } from "./contexts/User";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url: "Tom Tickle",
    name: "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
