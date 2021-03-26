import React from "react"

const Comment = ({user, body}) => {

    return (
        <div>
            <h6 style={{display:"inline"}}>{user} </h6>
            <p style={{display:"inline"}}>{body}</p>
        </div>
    )
}

export default Comment