import React from "react";
import "./Content.css";
import { Posts } from "./components/Posts/Posts";

export const Content = () => {
    return (
        <main className="content">
            <Posts />
        </main>
    );
};
