import HomeCSS from "./Home.module.css";
import React, { useState } from "react";

const Home = () => {

    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem velit eum perferendis atque alias minima hic omnis earum natus beatae voluptatibus harum dolor eius, ut illum inventore optio consectetur vitae corrupti totam asperiores dignissimos quia. Quia officia exercitationem incidunt odio laborio. Molestias fugit eveniet sunt porro tenetur sapiente suscipit alias unde atque nemo totam optio eum doloremque, earum velit corporis! Ipsam ipsa quod pariatur sed iusto nulla magni animi, id a adipisci sit explicabo quibusdam praesentium, est eligendi incidunt numquam?"

    const [isTruncated, setIsTruncated] = useState(true);

    const finalText = isTruncated ? text.slice(0, 300) : text;

    const toggleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    }

    return (
        <div className={HomeCSS.home}>
            <ul>
                <li id={HomeCSS.info_here}>
                    <h1>Home Cook</h1>
                    <p className={HomeCSS.info}>
                        {finalText}
                        <button id={HomeCSS.read} onClick={toggleIsTruncated}>{ isTruncated ? "Read more..." : "Read less..."}</button>
                    </p>
                </li>
                <li>
                    <img src="https://i.pinimg.com/originals/15/92/57/159257380b2add731c5f2692214a362e.png" className={HomeCSS.chef} />
                    {/* <div className={HomeCSS.buttons_role}>
                        <h2>Who are you?</h2>
                        <button className={HomeCSS.role} id={HomeCSS.cook}>Cook</button>
                        <button className={HomeCSS.role} id={HomeCSS.customer}>Customer</button>
                    </div> */}
                </li> 
            </ul>
        </div>
    );
}

export default Home;