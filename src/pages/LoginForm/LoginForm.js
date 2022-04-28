import React from "react";
import "./LoginForm.css";
import { useLoginValidation } from "../../shared/hooks";

export const LoginForm = () => {
    const login = useLoginValidation();

    return (
        <form onSubmit={login.handleLoginForm} className="form">
            <h1>Вход</h1>
            <div>
                <input
                    type="text"
                    className="form__login"
                    placeholder="Логин"
                    value={login.userData.login}
                    onChange={login.handleLoginChange}
                    required
                />
                <ul className="validation">
                    <li
                        style={{ color: login.loginLengthColor }}
                        className="validation-item"
                    >
                        Длина не менее 4 символов
                    </li>
                    <li
                        style={{ color: login.loginNumbersColor }}
                        className="validation-item"
                    >
                        Логин состоит из букв и цифр
                    </li>
                </ul>
            </div>
            <div>
                <input
                    type="password"
                    className="form__password"
                    placeholder="Пароль"
                    value={login.userData.password}
                    onChange={login.handlePasswordChange}
                    required
                />
                <ul className="validation">
                    <li
                        style={{ color: login.passwordLengthColor }}
                        className="validation-item"
                    >
                        Длина не менее 6 символов
                    </li>
                    <li
                        style={{ color: login.passwordNumberColor }}
                        className="validation-item"
                    >
                        Содержит цифры
                    </li>
                    <li
                        style={{ color: login.passwordСapitalColor }}
                        className="validation-item"
                    >
                        Содержит заглавную букву
                    </li>
                    <li
                        style={{ color: login.passwordLowerColor }}
                        className="validation-item"
                    >
                        Содержит строчную букву
                    </li>
                    <li
                        style={{ color: login.passwordUnderlineColor }}
                        className="validation-item"
                    >
                        Содержит нижнее подчеркивание
                    </li>
                </ul>
            </div>
            <button type="submit" className="form__btn">
                Отправить
            </button>
        </form>
    );
};
