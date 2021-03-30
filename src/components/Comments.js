import React, {useState} from "react"
import Comment from "./Comment"
import '../css/Comments.css'

const Comments = ({vidComments}) => {
    

    // const hardComments = [{user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}, {user:1, body:"Wow this is a reall great video!"}]

    const displayComments = () => {
        return vidComments.map(comment => <Comment key={comment.id} user={comment.user} body={comment.body}/>)
    }

    const [body, setBody] = useState("")

    function postNewComment(e) {
        e.preventDefault()
    }

    return (
        <>
            <form id="new-comment-form" onSubmit={postNewComment}>
                <input type="text" placeholder="Add a comment..." id="comment-field" value={body} onChange={e => setBody(e.target.value)}></input>
                <input type="submit" value="Comment" id="submit-btn"></input>
            </form>
            {vidComments && 
                <div className="comments">
                    <h5>{displayComments().length} Comments</h5>
                    {displayComments()}
                </div>
            }
    
        </>
    )
}

export default  Comments