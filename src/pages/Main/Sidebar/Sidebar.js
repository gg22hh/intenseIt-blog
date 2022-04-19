import React from "react";
import "./Sidebar.css";
import { Navigation } from "./components/Navigation/Navigation";
import { SidebarHeader } from "./components/SidebarHeader/SidebarHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Sidebar = ({ setActive }) => {
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem("isLogged");
        setActive(false);
        history.push("/login");
    };

    return (
        <aside className="sidebar">
            <SidebarHeader />
            <Navigation />
            <button onClick={logOut} className="sidebar__btn">
                <span>
                    <ArrowBackIcon />
                </span>
                Выход
            </button>
        </aside>
    );
};
