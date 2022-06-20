import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import styles from './styles.module.scss'

export function LogInOutButton() {
    const { signed, Logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        Logout();
        history.push("/");
    }

    return (
        <>
            {signed
                ? <button onClick={handleLogout}>Logout</button>
                : <button><Link to="/login">Login</Link></button>}
        </>
    )
}