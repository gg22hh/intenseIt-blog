import React from "react";
import "./SidebarHeader.css";

export const SidebarHeader = () => {
    const login = localStorage.getItem("user");
    return (
        <div className="sidebar__header">
            <div className="sidebar__header-avatar"></div>
            <div className="sidebar__header-name">{login}</div>
        </div>
    );
};
