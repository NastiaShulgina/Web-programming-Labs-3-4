import { useParams } from "react-router";
import CookDetailsCSS from "./CookDetails.module.css"
import { useState } from "react";
import CookList from "./CatalogList";

const CookDetails = () => {
    const [cooks, SetTheCooks] = useState([
        { showed: 'yes', price: '5$', name: 'Will Smith', experience: '3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '1' },
        { showed: 'yes', price: '10$', name: 'Guy Fieri', experience: '20', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '2' },
        { showed: 'yes', price: '100$', name: 'Gordon Ramsay', experience: '30', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '3' },
        { showed: 'yes', price: '75$', name: 'Zendaya', experience: '10', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '4' },
        { showed: 'no', price: '1$', name: 'Olesya Buryak', experience: '1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '5' },
        { showed: 'no', price: '200$', name: 'Master Chef', experience: '15', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '6' },
        { showed: 'no', price: '3$', name: 'Petro Petrenko', experience: '25', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '7' },
        { showed: 'no', price: '150$', name: 'Rachel Ray', experience: '28', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '8' },
    ]);
    const { id } = useParams();
    const ident = JSON.stringify(id)

    return (
        <div className={CookDetailsCSS.information}>
            <CookList cooks={cooks.filter((cook) => JSON.stringify(cook.id) == ident)} />
        </div>
    );
}

export default CookDetails;