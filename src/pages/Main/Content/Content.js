import React from "react";
import "./Content.css";
import { Posts } from "./components/Posts/Posts";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BlogPostPage } from "./components/BlogPostPage/BlogPostPage";
import { Account } from "./components/Account/Account";

export const Content = ({ postsData }) => {
    const [postsList, setPostsList, isLoading] = postsData;
    return (
        <main className="content">
            <Switch>
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
                <Route path="/blog/:postId">
                    <BlogPostPage
                        postsList={postsList}
                        setPostsList={setPostsList}
                    />
                </Route>
                <Route exact path="/account">
                    <Account />
                </Route>
                <Route exact path="/">
                    <Redirect to="/blog" />
                </Route>
            </Switch>
        </main>
    );
};
