import {useState, useEffect} from "react"
import ReactPlayer from 'react-player'
import '../css/VideoPage.css'
import Comments from "./Comments"
import {useParams} from 'react-router-dom'
import {createConsumer} from "@rails/actioncable"

const VideoPage = ({user}) => {

    const params = useParams()
    const id = params["id"]
    const [video, setVideo] = useState("")
    const [vidComments, setVidComments] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/videos/${id}`)
            .then(r => r.json())
            .then(video => {setVideo(video); setVidComments(video.comments)})
    },[id])
    const token = localStorage.getItem("token")

    useEffect(()=>{
        const cable = createConsumer("ws://localhost:3000/cable")
        const parameters = {
            channel: "CommentsChannel",
            video_id: id,
        }
        const handlers = {
            recieved(data){
                console.log(data)
            },
            connected(){
                console.log("connected")
            },
            disconnected(){
                console.log('disconnected')
            }
        }
        cable.subscriptions.create(parameters, handlers)

    }, [id])

    function createComment(body) {
        const form = {body: body, user_id: user.id, video_id: video.id, likes: 0, dislikes: 0}

        fetch("http://localhost:3000/comments", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`},
            body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(newComment => setVidComments([...vidComments, newComment]))
    }

    
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
        <Comments vidComments={vidComments} createComment={createComment} user={user}/>
        </div>
    )
}

export default VideoPage