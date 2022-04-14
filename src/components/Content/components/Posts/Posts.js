import React, { useState } from "react";
import "./Posts.css";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { AddNewPostForm } from "./components/AddNewPostForm";
import loadingGif from "../../../../assets/images/loading.gif";
import { POSTS_URL } from "../../../../shared/projectData";
import { useGetPosts } from "../../../../shared/hooks";
import { deleteData, likePost } from "../../../../shared/projectFunctions";

export const Posts = () => {
    const [addNewPostForm, setAddNewPostForm] = useState(false);

    const [postsList, setPostsList, isLoading] = useGetPosts(POSTS_URL);
    const setLike = (post) => {
        likePost(post, POSTS_URL, setPostsList, postsList);
    };
    const deletePost = (postId) => {
        deleteData(postId, POSTS_URL, setPostsList, postsList);
    };

    const blogPosts = postsList.map((item, position) => {
        return (
            <PostItem
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
            />
        );
    });

    return (
        <div className="posts">
            <div className="posts__header">
                <h2 className="posts__title">Posts</h2>
                <button
                    onClick={() => setAddNewPostForm(true)}
                    className="posts__addNewPost"
                >
                    Add new post
                </button>
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
