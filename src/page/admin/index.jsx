import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../context/api/userApi";
import { logout } from "../../context/slice/authSlice";

const Admin = () => {
    const [signIn, { isError, isLoading, isSuccess, data }] =
        useSignInMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            // localStorage.setItem("x-auth-token", data.data.token)
            dispatch(logout(data));
            // dispatch(setUser(null));
            // toast.success("Successfully logged in!");
            navigate("/admin");
        }
        if (isError) {
            // toast.error("Xato kiritingiz");
        }
    }, [isSuccess, isError]);

    const handleLogout = () => {
        // signIn({
        //     username: username,
        //     password: password,
        // });
        dispatch(logout(data));
        navigate("/login");
    };

    return (
        <div className="container" style={{ padding: "50px 0px" }}>
            <h1 className="section__title">Admin Panel</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sunt provident fugiat quasi amet adipisci architecto
                temporibus laborum labore sapiente, tempore ab nobis officia
                quis eligendi quo, harum omnis. Aliquid, eligendi? Fugiat minus
                reiciendis non, hic accusantium architecto eveniet porro earum,
                nisi, asperiores modi est soluta ut enim ad natus distinctio
                neque! Neque nihil ad nostrum <br /> <br /> maiores, molestias
                eligendi enim aperiam voluptas dolor, reprehenderit quaerat ut!
                Deserunt aliquid laborum tempore fuga placeat, recusandae iure
                libero cumque autem. Consequatur, earum. Officiis veritatis fuga
                veniam perferendis a in, quas ipsam libero blanditiis aperiam,
                beatae, doloremque sint. Recusandae quos esse cum perferendis
                hic.
            </p>
            <button
                style={{
                    background: "#33a0ff",
                    color: "#fff",
                    padding: "10px 30px",
                    borderRadius: "5px",
                    border: "none",
                    fontSize: "18px",
                    margin: "30px 0",
                }}
                onClick={handleLogout}
            >
                Log Out
            </button>
        </div>
    );
};

export default Admin;
