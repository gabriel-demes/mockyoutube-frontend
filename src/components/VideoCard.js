import React from 'react'
import { Link } from 'react-router-dom'
import '../css/VideoCard.css'


function VideoCard( {video} ) {
    return (
        <div className="video-card">
            <Link to={`/video/${video.id}`}>
                <img className="video-preview" src={video.thumbnail} alt={video.title} />
                <div className="video-detail">{video.title}</div>
            </Link>
        </div>
    )
}

export default VideoCard