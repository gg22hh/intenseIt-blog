import React from "react";
import "./Content.css";
import { Posts } from "./components/Posts/Posts";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useGetPosts } from "../../../shared/hooks";
import { POSTS_URL } from "../../../shared/projectData";

export const Content = () => {
    const [postsList, setPostsList, isLoading] = useGetPosts(POSTS_URL);
    return (
        <main className="content">
            <Route exact path="/blog">
                <Posts
                    title="Posts"
                    postsList={postsList}
                    setPostsList={setPostsList}
                    isLoading={isLoading}
                />
            </Route>
            <Route exact path="/favourites">
                <Posts
                    title="Favourites"
                    isLikedPost
                    postsList={postsList}
                    setPostsList={setPostsList}
                    isLoading={isLoading}
                />
            </Route>
        </main>
    );
};
