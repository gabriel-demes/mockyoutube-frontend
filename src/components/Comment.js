import React, {useState} from "react"
import '../css/Comment.css'

const Comment = ({user, body}) => {
    const [thumbUp, setThumbUp] = useState(false)
    const [likes, setLikes] = useState(0)
    const [thumbDown, setThumbDown] = useState(false)
    const [dislikes, setDislikes] = useState(0)

    function handleLike() {
        if (thumbUp) {
            setThumbUp(false)
            setLikes(likes - 1)
        } else {
            setThumbUp(true)
            setLikes(likes  + 1)
        }
    }

    function handleDislike() {
        if (thumbDown) {
            setThumbDown(false) 
            setDislikes(dislikes - 1)
        } else {
            setThumbDown(true)
            setDislikes(dislikes + 1)
        }
    }

    return (

        <div className="comment" >
            <h6 style={{display:"inline"}}>{user} </h6>
            <p style={{display:"inline"}}>{body}</p>
            <div className="comment-likes">
                <span className="thumbup" onClick={handleLike}>👍</span>&nbsp;&nbsp;<span id="likes-counter">{likes !== 0 ? likes: null }</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="thumbdown" onClick={handleDislike}>👎</span>&nbsp;&nbsp;<span id="dislikes-counter">{ dislikes !== 0 ? dislikes : null }</span>
            </div>
        </div>
    )
}

export default Comment