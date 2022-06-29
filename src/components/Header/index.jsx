import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import styles from './styles.module.scss'

import { LogInOutButton } from "../LogInOutButton";

export function Header() {
    const { signed } = useAuth();

    return (
        <header className={styles.defaultHeader}>
            <h1>
                <Link to="/" className={styles.headerLogo}>Home</Link>
            </h1>
            <div className={styles.itemWrapper}>
                {signed && <Link to="/cadastro" className={styles.headerItem}>
                    Cadastro de novo paciente
                </Link>}

                {signed && <div className={styles.verticalSeparator} ></div>}

                <Link to="/grafico/horasdeespera" className={styles.headerItem}>
                    Ocorrências por Faixa de permanência
                </Link>

                <div className={styles.verticalSeparator} ></div>

                <Link to="/grafico/permaneciaporgravidade" className={styles.headerItem}>
                    Permanência por Gravidade
                </Link>
            </div>
            <LogInOutButton />
        </header>
    );
}