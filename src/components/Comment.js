import React, {useState} from "react"
import '../css/Comment.css'

const Comment = ({body, created_at, user_id}) => {
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

    const [username, setUserName] = useState("")

    fetch(`http://localhost:3000/users/${user_id}`)
    .then(r => r.json())
    .then(user => setUserName(user.username))


    return (

        <div className="comment" >
            <div>
                <span>{username}</span>
                <span>{Date(created_at).split('G')[0]}</span>
            </div>
            <div>{body}</div>
            <div className="comment-likes">
                <span className="thumbup" onClick={handleLike}>👍</span>&nbsp;&nbsp;<span id="likes-counter">{likes !== 0 ? likes: null }</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="thumbdown" onClick={handleDislike}>👎</span>&nbsp;&nbsp;<span id="dislikes-counter">{ dislikes !== 0 ? dislikes : null }</span>
            </div>
        </div>
    )
}

export default Comment