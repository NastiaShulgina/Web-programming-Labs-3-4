import CookCSS from "./Cook.module.css"
import CooksCSS from "./Cooks.module.css"
import { Link } from "react-router-dom";

const CookInfo = (props) => {
    const cooks = props.cooks;

    return (
        <div className={CooksCSS.all_cooks}>
            {cooks.map((cook) => (
                <div>
                    <div className={CooksCSS.cook_preview} id={CookCSS.personal_info} key={cook.id}>
                        <h3 id={CookCSS.name}>{cook.name}</h3>
                        <h4 id={CookCSS.h4}>I've been working as a cook for {cook.experience} years.</h4>
                        <h4 id={CookCSS.h4}>My city: {cook.city}.</h4>
                        <p id={CookCSS.p}>{cook.body}</p>
                        <h4 id={CookCSS.pricing}>MIN price for order: {cook.price}.</h4>
                        <Link to="/chat">
                            <button className={CookCSS.buttons}>Contact the cook</button>
                        </Link>
                        <Link to="/catalog">
                            <button className={CookCSS.buttons}>Go back</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CookInfo;