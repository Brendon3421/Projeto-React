import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/130409961?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Brendon</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="04 de dezembro as 13:12 " dateTime="2024-12-04 13:12:10">Publicado ha 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href="">👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw</a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea
                    placeholder="Deixe um comentario!"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commnetList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}