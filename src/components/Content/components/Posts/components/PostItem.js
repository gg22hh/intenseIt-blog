import React from "react";
import "./PostItem.css";

export const PostItem = ({ image, title, text }) => {
    return (
        <div className="post__item">
            <div className="post__item-image">
                <img src={image} alt="Post image" />
            </div>
            <h3 className="post__item-title">{title}</h3>
            <div className="post__item-text">
                {text}
            </div>
        </div>
    );
};
