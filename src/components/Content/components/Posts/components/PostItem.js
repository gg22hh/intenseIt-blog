import React, { useState } from "react";
import { NO_IMAGE } from "../../../../../shared/projectData";
import "./PostItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const PostItem = ({ image = NO_IMAGE, title, text }) => {
    const [like, setLike] = useState(false);
    const color = like ? "crimson" : "black";

	const finalText = text.length > 180 ? (
		<>
			<span>{text.slice(0, 181)}...</span>
			<button className='more'>Подробнее</button>
		</>
	) : text

    return (
        <div className="post__item">
            <div className="post__item-image">
                <img src={image} alt="Post image" />
            </div>
            <h3 className="post__item-title">{title}</h3>
            <div className="post__item-text">{finalText}</div>
            <button onClick={() => setLike(!like)}>
                <FavoriteIcon style={{fill: color}} />
            </button>
        </div>
    );
};
