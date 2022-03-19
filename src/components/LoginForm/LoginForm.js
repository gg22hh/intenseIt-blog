import React, {useRef} from "react";
import './LoginForm.css'
import { usersData } from '../../shared/projectData';

export const LoginForm = ({ setActive }) => {
	const loginFormName = useRef()
	const loginFormPassword = useRef()

	const handleLoginForm = (e) => {
		e.preventDefault()
		setActive(true)

		const userData = {
			userName: loginFormName.current.value,
			password: loginFormPassword.current.value,
		}

		usersData.push(userData)
	}

	console.log(usersData)

    return (
        <form onSubmit={handleLoginForm} className="form">
            <h1>Вход</h1>
            <div>
                <input
                    type="text"
                    className="form__login"
                    placeholder="Логин"
					ref={loginFormName}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    className="form__password"
                    placeholder="Пароль"
					ref={loginFormPassword}
                    required
                />
            </div>
            <button type="submit" className="form__btn">
                Отправить
            </button>
        </form>
    );
};
