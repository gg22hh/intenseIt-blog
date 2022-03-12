import React, { useState } from "react";
import './LoginForm.css'

export const LoginForm = ({ setActive }) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const submitForm = () => {
		if (login.length === 0 || password.length === 0) return
		setActive(true)
	}

    return (
        <form className="form">
            <h1>Вход</h1>
            <div>
                <input
                    type="text"
                    className="form__login"
                    placeholder="Логин"
                    required
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    className="form__password"
                    placeholder="Пароль"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" onClick={submitForm} className="form__btn">
                Отправить
            </button>
        </form>
    );
};
