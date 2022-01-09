import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthApi from '../api/authApi'

export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const { userLogin } = useAuthApi()

    const loginHandler = async (e) => {
        e.preventDefault()

        const data = await userLogin(login, password)

        createCookie(data)
    }

    const createCookie = (data) => {
        document.cookie = `user=${data.userInfo.username}; max-age=60*60*24`
        document.cookie = `accessToken=${data.accessToken}; max-age=60*60*24`
        navigate('/admin')
    }

    return(
        <div className="login__page">
            <form name="login_form" onSubmit={loginHandler}>
                <h3>Login</h3>
                <div>
                    <input type="text" placeholder="Login" required onChange={e => setLogin(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form_button">
                <button>login</button>
                </div>
            </form>
        </div>
    )
}