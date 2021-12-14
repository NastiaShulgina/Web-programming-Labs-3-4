import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discount from "./components/Discount";
import Cooks from "./components/Cooks";
import CookDetails from "./components/CookDetails";
import SpecialOffers from "./components/SpecialOffers";
import CookList from "./components/CatalogList";
import { getCookies } from "./features/catchData";
import { useState, useEffect } from "react";

function App() {
  const [cooks,setCooks] = useState([])
  useEffect(()=>{
    getCookies().then(cooks=>setCooks(cooks))
  },[])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Discount />
              <Cooks cooks={cooks.slice(0,4)}/>
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/discounts">
              <SpecialOffers />
            </Route>
            <Route path="/cooks/:id">
              <CookDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
