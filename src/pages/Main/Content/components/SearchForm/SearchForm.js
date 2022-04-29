import React from "react";
import search from "../../../../../assets/images/search.svg";
import "./SearchForm.css";

export const SearchForm = ({ value, setValue }) => {
    return (
        <form className="search" action="#">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="search__input"
                placeholder="Найти"
            />
            <button type="submit" className="search__button">
                <img src={search} alt="Search icon" />
            </button>
        </form>
    );
};
