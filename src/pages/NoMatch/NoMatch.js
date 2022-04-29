import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import s from "./NoMatch.module.css";

export const NoMatch = () => {
    const history = useHistory();
    return (
        <div className={s.noMatch}>
            <h1 className={s.title}>404. Страница не найдена</h1>
            <h4 className={s.subtitle}>
                Возможно, она была перемещена, или вы просто неверно указали
                адрес страницы.
            </h4>
            <button className={s.button} onClick={() => history.goBack()}>
                Назад
            </button>
        </div>
    );
};
