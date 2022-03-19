import React from "react";
import { NO_IMAGE } from "../../../../../shared/projectData";
import "./PostItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const PostItem = ({
    image = NO_IMAGE,
    title,
    text,
    liked,
    setLike,
    deletePost,
}) => {
    const color = liked ? "crimson" : "black";

    const finalText =
        text.length > 180 ? (
            <>
                <span>{text.slice(0, 181)}...</span>
                <button className="more">Подробнее</button>
            </>
        ) : (
            text
        );

    return (
        <div className="post__item">
            <div className="post__item-image">
                <img src={image} alt="Post-item img" />
            </div>
            <h3 className="post__item-title">{title}</h3>
            <div className="post__item-text">{finalText}</div>
            <div className="post__item-buttons">
                <button onClick={setLike}>
                    <FavoriteIcon style={{ fill: color }} />
                </button>
                <button onClick={deletePost}>
                    <DeleteForeverIcon />
                </button>
            </div>
        </div>
    );
};
