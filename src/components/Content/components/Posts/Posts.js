import React from "react";
import './Posts.css'
import { posts } from '../../../../shared/projectData';
import { PostItem } from './components/PostItem';

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
            <h2 className="posts__title">Posts</h2>
            <div className="posts__inner">{blogPosts}</div>
        </div>
    );
};
