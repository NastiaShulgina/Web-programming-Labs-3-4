import { useParams } from "react-router";
import CookDetailsCSS from "./CookDetails.module.css"
import { useState } from "react";
import CookInfo from "./CookInfo";
import CookPhoto from "./CookPhoto";

const CookDetails = () => {
    const [cooks, SetTheCooks] = useState([
        { city: 'New York', showed: 'yes', price: '5$', name: 'Will Smith', experience: '3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '1' },
        { city: 'London', showed: 'yes', price: '10$', name: 'Guy Fieri', experience: '20', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '2' },
        { city: 'London', showed: 'yes', price: '100$', name: 'Gordon Ramsay', experience: '30', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '3' },
        { city: 'Los Angeles', showed: 'yes', price: '75$', name: 'Zendaya', experience: '10', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '4' },
        { city: 'Lviv', showed: 'no', price: '1$', name: 'Olesya Buryak', experience: '1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '5' },
        { city: 'Kyiv', showed: 'no', price: '200$', name: 'Master Chef', experience: '15', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '6' },
        { city: 'Odesa', showed: 'no', price: '3$', name: 'Petro Petrenko', experience: '25', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '7' },
        { city: 'California', showed: 'no', price: '150$', name: 'Rachel Ray', experience: '28', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!', id: '8' },
    ]);

    const createImage = function (src, title, id) {
        const photo = new Image();
        photo.src = src;
        photo.alt = title;
        photo.id = id;
        return photo;
    };

    const photos = [];

    photos.push(createImage("https://deanjilo.files.wordpress.com/2020/04/dff9dd0bf31cc4bf8eae834459be56dd.jpg?w=1304&h=1500&crop=1", "Will Smith", "1"));
    photos.push(createImage("https://pbs.twimg.com/media/EalRkPKWoAM7eoF.jpg:large", "Guy Fieri", "2"));
    photos.push(createImage("https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-gordon-ramsay-1612073061.jpg", "Gordon Ransay", "3"));
    photos.push(createImage("https://media1.popsugar-assets.com/files/thumbor/23dcKendbr1_zEO6DLmEqgMc1Ow/0x0:1997x1997/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/26/284/n/41541398/a8f792245c9b0ef7a992c9.16535828_/i/What-Movies-Has-Zendaya-Been.jpg", "Zendaya", "4"));
    photos.push(createImage("https://tvoemisto.tv/media/gallery/full/2/7/2782751_n.jpg", "Olesya Buryak", "5"));
    photos.push(createImage("https://s1.tchkcdn.com/i/11/1/389334_d99a2976_73d_26867509_2002440903361291_528472936676327424_n1.jpg", "Master Chef", "6"));
    photos.push(createImage("https://static9.depositphotos.com/1729220/1230/i/600/depositphotos_12302453-stock-photo-chef-of-the-future.jpg", "Petro Petrenko", "7"));
    photos.push(createImage("https://www.rachaelrayshow.com/sites/default/files/styles/video_1920x1080/public/images/2019-05/rach_101_pasta.jpg?itok=2GBbX5v7", "Rachel Ray", "8"));

    const { id } = useParams();
    const ident = JSON.stringify(id)

    return (
        <div className={CookDetailsCSS.information}>
            <CookInfo cooks={cooks.filter((cook) => JSON.stringify(cook.id) == ident)} />
            <CookPhoto photos={photos.filter((photo) => JSON.stringify(photo.id) == ident)} />
        </div>
    );
}

export default CookDetails;