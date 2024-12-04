import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Cooment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/130409961?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>brendon</strong>
                            <time title="04 de dezembro as 13:12 " dateTime="2024-12-04 13:12:10">Cerca ha 1 hora atras</time>
                        </div>


                        <button title="Deletar comentario!">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span> 20 </span>
                    </button>
                </footer>
            </div>
        </div>

    )
}