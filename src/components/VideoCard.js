import React from 'react'
import { Link } from 'react-router-dom'
import '../css/VideoCard.css'


function VideoCard( {video} ) {


    return (
        <div className="video-card">
            <Link to={`/video/${video.id}`}>
                <img className="video-preview" src={video.thumbnail} alt={video.title} />
                <div className="video-detail">
                    <div id="title">{video.title}</div>
                    <div id="username">{video.user_id}</div>
                    <div id="created-date">{Date(video.created_at).split('G')[0]}</div>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard