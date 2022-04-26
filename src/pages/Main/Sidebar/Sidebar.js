import React from "react";
import "./Sidebar.css";
import { Navigation } from "./components/Navigation/Navigation";
import { SidebarHeader } from "./components/SidebarHeader/SidebarHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/slices/auth";

export const Sidebar = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
        history.push("/login");
    };

    return (
        <aside className="sidebar">
            <SidebarHeader />
            <Navigation />
            <button onClick={handleLogOut} className="sidebar__btn">
                <span>
                    <ArrowBackIcon />
                </span>
                Выход
            </button>
        </aside>
    );
};
