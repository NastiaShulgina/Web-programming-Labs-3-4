import SpecialOffersCSS from "./SpecialOffers.module.css";

const SpecialOffers = () => {
    return (
        <div className={SpecialOffersCSS.section}>
            <img src="https://i.imgur.com/6f2wid0.gif" className={SpecialOffersCSS.sale} />
            <div className={SpecialOffersCSS.text}>
                <h2 className={SpecialOffersCSS.heading}>Discounts up to 30 %!</h2>
                <h3>Get a 5% discount for your first order.</h3>
                <h3>And then +5% for every 5th order discount!</h3>
            </div>
        </div>
    );
}

export default SpecialOffers;