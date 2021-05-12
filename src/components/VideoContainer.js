import React from 'react'
import '../css/VideoContainer.css'
import VideoCard from './VideoCard'

function VideoContainer( {videos} ) {

    const videoCardComponents = videos.map(video => <VideoCard key={video.id} video={video}/>)

    return (
        <section>
            {videoCardComponents}
        </section>
    )
}

export default VideoContainer