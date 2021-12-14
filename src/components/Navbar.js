import {ReactComponent as Logo} from "../assets/logo.svg";
import {Link} from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
    return ( 
        <nav className={NavbarCSS.navbar}>
                <ul>
                    <li>
                        <Link exact to ="/">Home</Link>
                    </li>
                    <li>
                        <Link exact to ="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link exact to ="/discounts">Special offers</Link>
                    </li>
                </ul>
            <div>
                <Logo id={NavbarCSS.logo_pic} />
            </div>
            <div className={NavbarCSS.buttons} id={NavbarCSS.navbar_buttons}>
                <button id={NavbarCSS.login}>Login</button>
                <button id={NavbarCSS.register}>Register</button>
            </div>
        </nav>
    );
}

export default Navbar;