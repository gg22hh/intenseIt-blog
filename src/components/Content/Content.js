import React from "react";
import "./Content.css";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { Footer } from './components/Footer/Footer';

export const Content = () => {
    return (
        <main className="content">
            <Header />
            <Posts />
			<Footer />
        </main>
    );
};
