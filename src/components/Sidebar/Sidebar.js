import React from "react";
import "./Sidebar.css";
import { SearchForm } from './components/SidebarForm/SearchForm';
import { Navigation } from './components/Navigation/Navigation';


export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h1 className="sidebar__title">#App</h1>
            <SearchForm />
            <Navigation />
        </aside>
    );
};
