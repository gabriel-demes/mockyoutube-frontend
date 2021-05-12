import React from 'react'
import "../css/Friends.css"

function Friends() {

    let friends = JSON.parse(localStorage.getItem("friends"))

    const frds = friends.map((frd) => <div className="friends">{frd}</div>)

    return (
        <>
            <div id="friendlist">
                <span>Subscriptions</span>
                {frds}
            </div>
        </>
    )
}

export default Friends