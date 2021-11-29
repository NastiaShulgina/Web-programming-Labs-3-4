import { useState } from "react";
import { Link } from "react-router-dom";
import CookList from "./CatalogList";
import CooksCSS from "./Cooks.module.css"

const Cooks = () => {

    // const firstImg = new Image ();
    // firstImg.src = 'https://deanjilo.files.wordpress.com/2020/04/dff9dd0bf31cc4bf8eae834459be56dd.jpg?w=1304&h=1500&crop=1';

    const [cooks, SetCooks] = useState([
        { showed: 'yes', price:'5$', name: 'Will Smith', experience: '3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '1' },
        { showed: 'yes', price:'10$', name: 'Guy Fieri', experience: '20', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '2' },
        { showed: 'yes', price:'100$', name: 'Gordon Ramsay', experience: '30', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '3' },
        { showed: 'yes', price:'75$', name: 'Zendaya', experience: '10', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '4' },
        { showed: 'no', price:'1$', name: 'Olesya Buryak', experience: '1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '5' },
        { showed: 'no', price:'200$', name: 'Master Chef', experience: '15', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '6' },
        { showed: 'no', price:'3$', name: 'Petro Petrenko', experience: '25', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '7' },
        { showed: 'no', price:'150$', name: 'Rachel Ray', experience: '28', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '8' },
    ]);

    return (
        <div className={CooksCSS.cooks_container}>
            <h2 className={CooksCSS.our_cooks}>Our famous cooks:</h2>
            <div className={CooksCSS.cooks_photos}>
                <img id={CooksCSS.Will} src='https://deanjilo.files.wordpress.com/2020/04/dff9dd0bf31cc4bf8eae834459be56dd.jpg?w=1304&h=1500&crop=1' alt="Will Smith" />
                <img id={CooksCSS.Fieri} src="https://pbs.twimg.com/media/EalRkPKWoAM7eoF.jpg:large" alt="Guy Fieri" />
                <img id={CooksCSS.Ramsay} src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-gordon-ramsay-1612073061.jpg" alt="Gordon Ramsay" />
                <img id={CooksCSS.Zendaya} src="https://media1.popsugar-assets.com/files/thumbor/23dcKendbr1_zEO6DLmEqgMc1Ow/0x0:1997x1997/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/26/284/n/41541398/a8f792245c9b0ef7a992c9.16535828_/i/What-Movies-Has-Zendaya-Been.jpg" alt="Zendaya" />
            </div>
            <div className={CooksCSS.all_cooks} >
                <CookList cooks={cooks.filter((cook) => cook.showed === 'yes')} />
            </div>
            <div style={{display: "flex", justifyContent:"space-between", width:"95%"}}>
                <h3 className={CooksCSS.choose}>To choose an ideal cook for yourself — click the button:</h3>
                <Link exact to="/catalog"> <button to="/catalog" className={CooksCSS.search}>Search</button></Link>
            </div>
        </div>
    );
}

export default Cooks;