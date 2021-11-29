import { ReactComponent as Stamp } from "../assets/stamp.svg";
import {Link} from "react-router-dom";
import DiscountCSS from "./Discount.module.css";

const Discount = () => {
    return (  
        <div className={DiscountCSS.discount}>
            <ul className={DiscountCSS.discount_container}>
                <li>
                    <Stamp id={DiscountCSS.stamp_pic} />
                </li>
                <li>
                    <h2 id={DiscountCSS.question}>Wanna some discount?</h2>
                    <div style={{display:"flex"}}>
                        <h2 id={DiscountCSS.answer}>No problem!</h2>
                    </div>
                </li>
            </ul>
            <Link exact to ="/discounts" id={DiscountCSS.discount_link}>Click me to find more information...</Link>
        </div>
    );
}

export default Discount;