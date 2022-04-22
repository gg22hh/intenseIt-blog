import React, { useState } from "react";
import "./Posts.css";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { AddNewPostForm } from "./components/AddNewPostForm";
import loadingGif from "../../../../../assets/images/loading.gif";
import { POSTS_URL } from "../../../../../shared/projectData";
import { deleteData, likePost } from "../../../../../shared/projectFunctions";

export const Posts = ({
    title,
    isLikedPost = false,
    postsList,
    setPostsList,
    isLoading,
}) => {
    const [addNewPostForm, setAddNewPostForm] = useState(false);

    const likedPosts = postsList?.filter((item) => item.liked);

    const setLike = (post) => {
        likePost(post, POSTS_URL, setPostsList, postsList);
    };
    const deletePost = (postId) => {
        deleteData(postId, POSTS_URL, setPostsList, postsList);
    };

    const blogPosts = (isLikedPost ? likedPosts : postsList)?.map(
        (item, position) => {
            return (
                <PostItem
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.description}
                    liked={item.liked}
                    setLike={() => setLike(item)}
                    deletePost={() => deletePost(item.id)}
                    position={position}
                    postsList={postsList}
                    setPostsList={setPostsList}
                    isLikedPost={isLikedPost}
                />
            );
        }
    );

    return (
        <div className="posts">
            <div className="posts__header">
                <h2 className="posts__title">{title}</h2>
                {!isLikedPost && (
                    <button
                        onClick={() => setAddNewPostForm(true)}
                        className="posts__addNewPost"
                    >
                        Add new post
                    </button>
                )}

                <SearchForm />
            </div>

            {addNewPostForm && (
                <AddNewPostForm
                    setAddNewPostForm={setAddNewPostForm}
                    setPostsList={setPostsList}
                    postsList={postsList}
                />
            )}

            <div className="posts__inner">
                {isLoading ? (
                    <img className="posts__loading" src={loadingGif} alt="" />
                ) : (
                    blogPosts
                )}
            </div>
        </div>
    );
};
