import React from "react";
import "./Sidebar.css";
import { Navigation } from './components/Navigation/Navigation';
import { SidebarHeader } from './components/SidebarHeader/SidebarHeader';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export const Sidebar = ({ setActive }) => {
    return (
        <aside className="sidebar">
            <SidebarHeader />
            <Navigation />
            <button onClick={() => setActive(false)} className="sidebar__btn">
                <span>
                    <ArrowBackIcon />
                </span>
                Выход
            </button>
        </aside>
    );
};
