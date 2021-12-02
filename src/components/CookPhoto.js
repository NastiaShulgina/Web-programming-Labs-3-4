import CookPhotoCSS from "./CookPhoto.module.css";

const CookInfo = (props) => {
    const photos = props.photos;

    return (
        <div>
            {photos.map((photo) => (
                <div>
                    <img id={CookPhotoCSS.photo} src={photo.src} alt={photo.alt} />
                </div>
            ))}
        </div>
    );
}

export default CookInfo;