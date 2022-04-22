import React, { useState } from "react";
import { NO_IMAGE } from "../../../../../../shared/projectData";
import "./PostItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { ChangePostForm } from "./ChangePostForm";
import { Link } from "react-router-dom";

export const PostItem = ({
    image = NO_IMAGE,
    title,
    text,
    liked,
    setLike,
    deletePost,
    position,
    postsList,
    setPostsList,
    isLikedPost,
    id,
}) => {
    const [activeChangeForm, setActiveChangeForm] = useState(false);
    const color = liked ? "crimson" : "black";

    const finalText =
        text.length > 180 ? (
            <>
                <span>{text.slice(0, 181)}...</span>
                <Link to={`/blog/${id}`} className="more">
                    Подробнее
                </Link>
            </>
        ) : (
            <>
                {text}
                <Link to={`/blog/${id}`} className="more">
                    Подробнее
                </Link>
            </>
        );

    return (
        <>
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
                    <button onClick={() => setActiveChangeForm(true)}>
                        <EditIcon />
                    </button>
                    <button onClick={deletePost}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </div>
            {activeChangeForm && (
                <ChangePostForm
                    setActiveChangeForm={setActiveChangeForm}
                    position={position}
                    postsList={postsList}
                    setPostsList={setPostsList}
                    isLikedPost={isLikedPost}
                />
            )}
        </>
    );
};
