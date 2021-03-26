import React from 'react'
import '../css/VideoContainer.css'
import VideoCard from './VideoCard'

function VideoContainer( {videos} ) {

    const videoCardComponents = videos.map(video => <VideoCard video={video}/>)

    return (
        <section>
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
            {videoCardComponents}
        </section>
    )
}

export default VideoContainer