import React from 'react'
import './Navigation.css'
import blog from "../../../../assets/images/blog.svg";
import star from "../../../../assets/images/star.svg";
import settings from "../../../../assets/images/settings.svg";

export const Navigation = () => {
	return (
        <nav className="navigation">
            <a className="navigation__link focus" href="#">
                <img src={blog} alt="" /> <span>Blog</span>
            </a>
            <a className="navigation__link" href="#">
                <img src={star} alt="" /> <span>Favorites</span>
            </a>
            <a className="navigation__link" href="#">
                <img src={settings} alt="" /> <span>Settings</span>
            </a>
        </nav>
    );
}
