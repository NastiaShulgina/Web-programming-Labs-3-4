import CatalogCSS from "./Catalog.module.css"
import CooksCSS from "./Cooks.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";


const Catalog = () => {

    const [allCooks, SetCooks] = useState([
        { city: 'New York', showed: 'yes', price: '5$', name: 'Will Smith', experience: '3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 1 },
        { city: 'London', showed: 'yes', price: '10$', name: 'Guy Fieri', experience: '20', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 2 },
        { city: 'London', showed: 'yes', price: '100$', name: 'Gordon Ramsay', experience: '30', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 3 },
        { city: 'New York', showed: 'yes', price: '75$', name: 'Zendaya', experience: '10', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 4 },
        { city: 'Lviv', showed: 'no', price: '1$', name: 'Olesya Buryak', experience: '1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 5 },
        { city: 'Kyiv', showed: 'no', price: '200$', name: 'Master Chef', experience: '15', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 6 },
        { city: 'Odesa', showed: 'no', price: '3$', name: 'Petro Petrenko', experience: '25', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 7 },
        { city: 'New York', showed: 'no', price: '150$', name: 'Rachel Ray', experience: '28', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: 8 },
    ]);

    const [searchTerm, setSearchTerm] = useState('')

    const [cityState, setCityState] = useState('Choose...')

    return (
        <div className={CatalogCSS.catalog}>
            <div className={CatalogCSS.search_section}>
                <form className={CatalogCSS.search_form}>
                    <div>
                        <label>Search by name:</label>
                        <input type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
                    </div>
                    <div>
                        <label className={CatalogCSS.autocomplete__label}>Select your city:</label>
                        <select className={CatalogCSS.autocomplete__list} onChange = {event => { setCityState(event.target.value)}}>
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
                {allCooks.filter((cook) => {
                    if (searchTerm == "" && cityState == "Choose...") {
                        return cook
                    } else if (cook.name.toLowerCase().includes(searchTerm.toLowerCase()) && (cook.city.toLowerCase() == (cityState.toLowerCase()))) {
                        return cook
                    } else if (cook.name.toLowerCase().includes(searchTerm.toLowerCase()) && cityState == "Choose...") {
                        return cook
                    } else if (searchTerm == "" && (cook.city.toLowerCase() == (cityState.toLowerCase()))) {
                        return cook
                    }
                }).map((cook) => (
                    <div className={CooksCSS.cook_preview} id={CatalogCSS.cook_card} key={cook.id}>
                        <Link to={`/cooks/${cook.id}`}>
                            <h3>{cook.name}</h3>
                            <h4>I've been working as a cook for {cook.experience} years.</h4>
                            <p>{cook.body}</p>
                            <h4 id={CatalogCSS.city}>City: {cook.city}.</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;