import CatalogCSS from "./Catalog.module.css"

const RenderCardSelector = () => {
    return (
        <div className={CatalogCSS.selector}>
            <label className={CatalogCSS.selector_label}>Select your city</label>
            <select className={CatalogCSS.form_control}>
                <option></option>
                <option>Lviv</option>
                <option>Kyiv</option>
                <option>London</option>
                <option>New York</option>
                <option>California</option>
            </select>
        </div>
    );
}

export default RenderCardSelector;