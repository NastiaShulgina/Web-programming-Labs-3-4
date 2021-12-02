import CooksCSS from "./Cooks.module.css"

const CookList = (props) => {
    const cooks = props.cooks;

    return ( 
        <div className={CooksCSS.all_cooks}>
            {cooks.map((cook) => (
            <div className={CooksCSS.cook_preview} key={cook.id}>
                <h3>{cook.name}</h3>
                <h4>I've been working as a cook for {cook.experience} years.</h4>
                <p>{cook.body}</p>
            </div>
        ))}
        </div>
    );
}

export default CookList;