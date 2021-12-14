import CatalogCSS from "./Catalog.module.css";
import CooksCSS from "./Cooks.module.css";
import { useState, useEffect } from "react";
import { getCookies, getCookByCity } from "../features/catchData";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allCooks, SetCooks] = useState([]);
  const firstStep = 3;
  const interval = 2;
  const [currentStep, setCurrentStep] = useState(firstStep);
  const [searchTerm, setSearchTerm] = useState("");
  const [spinning, setSpinning] = useState(true);
  useEffect(() => {
    setCurrentStep(currentStep + interval);
    getCookies()
      .then((response) => SetCooks(response.slice(0, currentStep)))
      .then((_) => setSpinning(false));
  }, []);
  useEffect(() => {
    setCurrentStep(currentStep + interval);
    setSpinning(true);
    getCookies()
      .then((response) => SetCooks(response.slice(0, currentStep)))
      .then((_) => setSpinning(false));
  }, [isLoading]);

  const [cityState, setCityState] = useState("Choose...");
  const onSelectCity = (city) => {
    setCityState(city);
    if (city === "Choose...") {
      getCookies().then((response) => SetCooks(response.slice(0, currentStep)));
    }
    else{
      getCookByCity(city).then((response)=>SetCooks(response));
    }
    console.log(allCooks);
  };
  const loadMoreLister = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className={CatalogCSS.catalog}>
      <button onClick={() => loadMoreLister()}>LoadMore</button>
      <Spin indicator={antIcon} spinning={spinning} />
      <div className={CatalogCSS.search_section}>
        <form className={CatalogCSS.search_form}>
          <div>
            <label>Search by name:</label>
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div>
            <label className={CatalogCSS.autocomplete__label}>
              Select your city:
            </label>
            <select
              className={CatalogCSS.autocomplete__list}
              onChange={(event) => {
                onSelectCity(event.target.value);
              }}
            >
              <option>Choose...</option>
              <option>Lviv</option>
              <option>Kyiv</option>
              <option>Odesa</option>
              <option>London</option>
              <option>New York</option>
            </select>
          </div>
        </form>
      </div>
      <div className={CatalogCSS.catalogCards}>
        {allCooks && allCooks
          .filter((cook) => {
            if (searchTerm == "" && cityState == "Choose...") {
              return cook;
            } else if (
              cook.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
              cook.city.toLowerCase() == cityState.toLowerCase()
            ) {
              return cook;
            } else if (
              cook.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
              cityState == "Choose..."
            ) {
              return cook;
            } else if (
              searchTerm == "" &&
              cook.city.toLowerCase() == cityState.toLowerCase()
            ) {
              return cook;
            }
          })
          .map((cook) => (
            <div
              className={CooksCSS.cook_preview}
              id={CatalogCSS.cook_card}
              key={cook.id}
            >
              <Link to={`/cooks/${cook.id}`}>
                <h3>{cook.name}</h3>
                <h4>
                  I've been working as a cook for {cook.experience} years.
                </h4>
                <p>{cook.body}</p>
                <h4 id={CatalogCSS.city}>City: {cook.city}.</h4>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Catalog;
