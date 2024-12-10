import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react"
//author: {avatar_url: "", name:"", role: ""}
//publishedAt: Date
//content: String

export function Post(props) {
    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const [newCommentText, setNewCommentText] = useState('');


    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    //estado = variavel que eu quero que o componente monitore
    const [comments, setComments] = useState([
        "Post muito Bacana!",
    ])

    function handleCreateNewComment(event) {
        event.preventDefault()
        // imutabilidade
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }
    //funcao de criar um novo comentario
    function handleNewCommenctChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    //funcao de deletar comentario
    function deleteComment(commentToDelete) {
        //imutabilidade!, nos nao alteramos as variavel , nos criamos um novo valor ( na memoria )
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    //funcao de validacao do texto
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo e obrigatorio');
    }

    const isNewCommentInputEmpty =newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={props.author.avatarUrl}
                        className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content} ><a href="$">{line.content}</a></p>

                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentario!"
                    value={newCommentText}
                    onChange={handleNewCommenctChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>

                    <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commnetList}>
                {/* //para cada comentario ele cria um! */}
                {comments.map(comment => {
                    return <Comment
                        onDeleteComment={deleteComment}
                        key={comment}
                        content={comment}
                    />
                })}
            </div>
        </article>
    )
}