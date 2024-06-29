import React, { useEffect, useState } from "react";
import "./login.scss";
import { useSignInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slice/authSlice";

const Login = () => {
    const [username, setUsername] = useState("johnd");
    const [password, setPassword] = useState("m38rmF$");
    const [signIn, { isError, isLoading, isSuccess, data }] =
        useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            // localStorage.setItem("x-auth-token", data.data.token)
            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
            // toast.success("Successfully logged in!");
            navigate("/admin");
        }
        if (isError) {
            // toast.error("Xato kiritingiz");
        }
    }, [isSuccess, isError]);
    const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
            username: username,
            password: password,
        });
    };
    // console.log(data?.token);
    return (
        <div className="login">
            <form onSubmit={handelSubmit} className="login__form" action="">
                <div className="login__input">
                    <label htmlFor="username">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        id="username"
                    />
                </div>
                <div className="login__input">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                    />
                </div>
                <button>LOGIN</button>
            </form>
        </div>
    );
};

export default Login;
