import React, { useState } from "react";
import "./Posts.css";
import { posts } from "../../../../shared/projectData";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { AddNewPostForm } from './components/AddNewPostForm';

export const Posts = () => {
    const [postsList, setPostsList] = useState(posts);
	const [addNewPostForm, setAddNewPostForm] = useState(false)

    const blogPosts = postsList.map((item, position) => {
        return (
            <PostItem
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                liked={item.liked}
                setLike={() => setLike(position)}
                deletePost={() => deletePost(position)}
                position={position}
                postsList={postsList}
                setPostsList={setPostsList}
            />
        );
    });

    const setLike = (position) => {
        const updatedPost = [...postsList];
        updatedPost[position] = {
            ...updatedPost[position],
            liked: !updatedPost[position].liked,
        };

		setPostsList(updatedPost)
    };

	const deletePost = (position) => {
		const updatedPost = [...postsList]
		const areYouSure = window.confirm(`Delete: ${updatedPost[position].title}`)
		areYouSure && updatedPost.splice(position, 1);

		setPostsList(updatedPost)
	}

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

            <div className="posts__inner">{blogPosts}</div>
        </div>
    );
};
