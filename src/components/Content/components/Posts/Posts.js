import React, { useState } from "react";
import "./Posts.css";
import { posts } from "../../../../shared/projectData";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";

export const Posts = () => {
    const [postsList, setPostsList] = useState(posts);

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
		updatedPost.splice(position, 1)

		setPostsList(updatedPost)
	}

    return (
        <div className="posts">
            <div className="posts__header">
                <h2 className="posts__title">Posts</h2>
                <SearchForm />
            </div>

            <div className="posts__inner">{blogPosts}</div>
        </div>
    );
};
