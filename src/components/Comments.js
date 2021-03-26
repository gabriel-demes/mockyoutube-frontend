import React from "react"
import Comment from "./Comment"


const Comments = () => {

    const hardComments = [{user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}]

    const displayComments = () => {
        return hardComments.map(comment => <Comment user={comment.user} body={comment.body}/>)
    }

    return (
        <div>
            {displayComments()}
        </div>
    )
}

export default  Comments