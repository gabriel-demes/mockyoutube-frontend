import React from "react"
import Comment from "./Comment"
import '../css/Comments.css'

const Comments = ({vidComments}) => {

    // const hardComments = [{user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}]

    const displayComments = () => {
        return vidComments.map(comment => <Comment key={comment.id} user={comment.user} body={comment.body}/>)
    }

    return (
        <div className="comments">
            <h5>Comments</h5>

            {vidComments ? displayComments() : null}
        </div>
    )
}

export default  Comments