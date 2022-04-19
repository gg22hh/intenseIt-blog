import React from "react";
import "./Navigation.css";
import blog from "../../../../../assets/images/blog.svg";
import star from "../../../../../assets/images/star.svg";
import settings from "../../../../../assets/images/settings.svg";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink className="navigation__link" to="/blog">
                <img src={blog} alt="" /> <span>Blog</span>
            </NavLink>
            <NavLink className="navigation__link" to="/favourites">
                <img src={star} alt="" /> <span>Favorites</span>
            </NavLink>
            <NavLink className="navigation__link" to="/settings">
                <img src={settings} alt="" /> <span>Settings</span>
            </NavLink>
        </nav>
    );
};
