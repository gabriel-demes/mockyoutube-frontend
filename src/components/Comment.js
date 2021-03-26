import React from "react"
import '../css/Comment.css'

const Comment = ({user, body}) => {

    return (
        <div className="comment">
            <h6 style={{display:"inline"}}>{user} </h6>
            <p style={{display:"inline"}}>{body}</p>
        </div>
    )
}

export default Comment