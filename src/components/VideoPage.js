import React from "react"
import ReactPlayer from 'react-player'
import '../css/VideoPage.css'
import Comments from "./Comments"

const VideoPage = () => {


    return(
        <div>
        <div className="player-wrapper">
            <ReactPlayer
            className='react-player'
            url="https://res.cloudinary.com/gd1063/video/upload/v1616686256/ip4lovgz6wabplfy2gmz.mov"
            controls={true}
            light="https://res.cloudinary.com/gd1063/image/upload/v1616686232/ezixatoogksih3k7ltwi.png"
            width="100%"
            height="24em"
            />
        </div>
        <Comments/>
        </div>
    )
}

export default VideoPage