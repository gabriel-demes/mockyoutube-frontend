import React from 'react'
import '../css/VideoCard.css'

function VideoCard( {video} ) {
    return (
        <div className="video-card">
            <a href={video.url}>
                <img className="video-preview" src={video.thumbnail} />
                <div className="video-detail">{video.title}</div>
            </a>
        </div>
    )
}

export default VideoCard