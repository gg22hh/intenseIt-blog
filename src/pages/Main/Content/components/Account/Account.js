import React from "react";
import s from "./Account.module.css";

export const Account = () => {
    const login = localStorage.getItem("user");

    return (
        <div className={s.account}>
            <div>
                <div className={s.login}>{login}</div>
            </div>
        </div>
    );
};
