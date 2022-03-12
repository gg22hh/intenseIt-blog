import React from "react";
import "./Posts.css";
import { posts } from "../../../../shared/projectData";
import { PostItem } from "./components/PostItem";
import { SearchForm } from '../SearchForm/SearchForm';

export const Posts = () => {
    const blogPosts = posts.map((item) => {
        return (
            <PostItem
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
            />
        );
    });

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
