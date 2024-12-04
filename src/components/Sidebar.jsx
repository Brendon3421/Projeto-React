import { Avatar } from './Avatar';
import styles from './Siderbar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1600267185296-f7dc4efe939c?fm=jpg&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="developer"
            />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/130409961?v=4"/>

                <strong>Brendon </strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />

                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}