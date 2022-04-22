import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePost } from "../../../../../shared/hooks";
import { POSTS_URL } from "../../../../../shared/projectData";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import {
    deleteData,
    likeSinglePost,
} from "../../../../../shared/projectFunctions";
import loadingGif from "../../../../../assets/images/loading.gif";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ChangeSinglePost } from "./ChangeSinglePost";

export const BlogPostPage = ({ setPostsList, postsList }) => {
    const [activeChangeForm, setActiveChangeForm] = useState(false);

    const postId = useParams();

    const history = useHistory();

    const [postList, setPostList, isLoading] = useGetSinglePost(
        POSTS_URL,
        postId.postId
    );

    const setLike = (post) => {
        likeSinglePost(post, POSTS_URL, setPostsList, postsList, setPostList);
    };

    const deletePost = (postId) => {
        deleteData(postId, POSTS_URL, setPostsList, postsList);
        history.goBack();
    };

    const color = postList.liked ? "crimson" : "black";

    return (
        <>
            {isLoading ? (
                <img className="posts__loading" src={loadingGif} alt="" />
            ) : (
                <div className="post__item">
                    <div className="post__item-image">
                        <img src={postList.image} alt="Post-item img" />
                    </div>
                    <h3 className="post__item-title">{postList.title}</h3>
                    <div className="post__item-text">
                        {postList.description}
                    </div>
                    <div className="post__item-buttons">
                        <button onClick={() => setLike(postList)}>
                            <FavoriteIcon style={{ fill: color }} />
                        </button>
                        <button onClick={() => setActiveChangeForm(true)}>
                            <EditIcon />
                        </button>
                        <button onClick={() => deletePost(postId.postId)}>
                            <DeleteForeverIcon />
                        </button>
                    </div>
                </div>
            )}

            {activeChangeForm && (
                <ChangeSinglePost
                    postList={postList}
                    setActiveChangeForm={setActiveChangeForm}
                    postsList={postsList}
                    setPostsList={setPostsList}
                    setPostList={setPostList}
                />
            )}
        </>
    );
};
