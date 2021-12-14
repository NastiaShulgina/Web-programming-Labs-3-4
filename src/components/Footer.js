import {ReactComponent as Logo} from '../assets/logo.svg';
import FooterCSS from './Footer.module.css';
import {ReactComponent as Twitter} from '../assets/twitter.svg';
import {ReactComponent as Instagram} from '../assets/instagram.svg';
import {ReactComponent as Facebook} from '../assets/facebook.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';
import {ReactComponent as Youtube} from '../assets/youtube.svg';

const Footer = () => {
    return (
        <div className={FooterCSS.footer}>
            <div>
                <Logo id={FooterCSS.logo_pic} />
            </div>
            <div>
                <p className={FooterCSS.copyright}>© 2021 Home Cook — All rights reserved.</p>
                <div>
                    <ul className={FooterCSS.social_media}>
                        <li className={FooterCSS.media}><Linkedin /></li>
                        <li className={FooterCSS.media}><Twitter /></li>
                        <li className={FooterCSS.media}><Instagram /></li>
                        <li className={FooterCSS.media}><Facebook /></li>
                        <li className={FooterCSS.media}><Youtube /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;