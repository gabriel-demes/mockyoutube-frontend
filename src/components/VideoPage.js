import {useState, useEffect} from "react"
import ReactPlayer from 'react-player'
import '../css/VideoPage.css'
import Comments from "./Comments"
import {useParams} from 'react-router-dom'

const VideoPage = () => {

    const params = useParams()
    const id = params["id"]
    const [video, setVideo] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:3000/videos/${id}`)
            .then(r => r.json())
            .then(video => setVideo(video))
    },[id])
    console.log(video.comments)
    
    return(
        <div>
        <div className="player-wrapper">
            <ReactPlayer
            className='react-player'
            url={video.url}
            controls={true}
            light={video.thumbnail}
            width="100%"
            height="24em"
            />
        </div>
        <h4 className="vidTitle">{video.title}</h4>
        <div className="vidstats">
            <section>{video.views} Views</section>
            <section>👍{video.likes} 👎{video.dislikes}</section>
            <section>Share</section>
        </div>
        <Comments vidComments={video.comments}/>
        </div>
    )
}

export default VideoPage