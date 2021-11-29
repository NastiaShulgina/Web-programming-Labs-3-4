import CatalogCSS from "./Catalog.module.css"
import CooksCSS from "./Cooks.module.css"
import CookList from "./CatalogList";
import { useState } from "react";
import CheckBox from "./CheckBox";
import RenderCardSelector from "./Selector";
import { Link } from "react-router-dom";
// import CardItem from "../templates/Carditem/Carditem";


const Catalog = () => {
    const [allCooks, SetCooks] = useState([
        { showed: 'yes', price: '5$', name: 'Will Smith', experience: '3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 1 },
        { showed: 'yes', price: '10$', name: 'Guy Fieri', experience: '20', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 2 },
        { showed: 'yes', price: '100$', name: 'Gordon Ramsay', experience: '30', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 3 },
        { showed: 'yes', price: '75$', name: 'Zendaya', experience: '10', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 4 },
        { showed: 'no', price: '1$', name: 'Olesya Buryak', experience: '1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 5 },
        { showed: 'no', price: '200$', name: 'Master Chef', experience: '15', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 6 },
        { showed: 'no', price: '3$', name: 'Petro Petrenko', experience: '25', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 7 },
        { showed: 'no', price: '150$', name: 'Rachel Ray', experience: '28', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 8 },
    ]);

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className={CatalogCSS.catalog}>
            <div className={CatalogCSS.search_section}>
                <form className={CatalogCSS.search_form}>
                    <label>Search by name:</label>
                    <input type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
                    {/* <CheckBox /> */}
                    {/* <RenderCardSelector /> */}
                </form>
            </div>
            <div className={CatalogCSS.catalogCards}>
                {allCooks.filter((cook) => {
                    if (searchTerm == "") {
                        return cook
                    } else if (cook.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return cook
                    }
                }).map((cook) => (
                    <div className={CooksCSS.cook_preview} id={CatalogCSS.cook_card} key={cook.id}>
                        <Link to={`/cooks/${cook.id}`}>
                            <h3>{cook.name}</h3>
                            <h4>I've been working as a cook for {cook.experience} years.</h4>
                            <p>{cook.body}</p>
                            <h4 id={CatalogCSS.pricing}>MIN price for order: {cook.price}.</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;