import React, { useState, useEffect } from "react";
import "./Posts.css";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { AddNewPostForm } from "./components/AddNewPostForm";
import loadingGif from "../../../../assets/images/loading.gif";
import { POSTS_URL } from "../../../../shared/projectData";

export const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    const [addNewPostForm, setAddNewPostForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const getPosts = async () => {
            const response = await fetch(POSTS_URL);
            const json = await response.json();
            setPostsList(json);
            setIsLoading(false);
        };
        getPosts();
    }, []);

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

    const setLike = async (post) => {
        const updatedPost = { ...post, liked: !post.liked };

        const response = await fetch(POSTS_URL + post.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        });

        if (response.ok) {
            const updatedPostFromServer = await response.json();
            setPostsList(
                postsList.map((post) => {
                    if (post.id === updatedPostFromServer.id) {
                        return updatedPostFromServer;
                    }

                    return post;
                })
            );
        } else {
            console.log(`${response.status} - ${response.statusText}`);
        }
    };

    const deletePost = async (postId) => {
        const areYouSure = window.confirm("Are you sure?");
        if (areYouSure) {
            const response = await fetch(POSTS_URL + postId, {
                method: "DELETE",
            });

            if (response.ok) {
                setPostsList(postsList.filter((post) => post.id !== postId));
            } else {
                console.log(`${response.status} - ${response.statusText}`);
            }
        }
    };

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
