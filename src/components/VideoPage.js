import {useState, useEffect} from "react"
import ReactPlayer from 'react-player'
import '../css/VideoPage.css'
import Comments from "./Comments"
import {useParams} from 'react-router-dom'
import {createConsumer} from "@rails/actioncable"
import {FacebookShareButton, TelegramShareButton, TwitterShareButton} from "react-share"
import {FacebookIcon, TelegramIcon, TwitterIcon} from "react-share"

const VideoPage = ({user}) => {
    const params = useParams()
    const id = params["id"]
    const [video, setVideo] = useState("")
    const [vidComments, setVidComments] = useState([])

    const [likes, setLikes] = useState(null)
    const [dislikes, setDislikes] = useState(null)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3000/videos/${id}`)
            .then(r => r.json())
            .then(video => {
                setVideo(video); 
                setVidComments(video.comments); 
                setLikes(video.likes); 
                setDislikes(video.dislikes);
                if (localStorage.getItem("vidHistory")){
                    const vidHistory = JSON.parse(localStorage.getItem("vidHistory"))
                    localStorage.setItem("vidHistory", JSON.stringify([video,...vidHistory]))
                }else{localStorage.setItem("vidHistory", JSON.stringify([video]))}
            })
    },[id])

    const token = localStorage.getItem("token")

    useEffect(()=>{
        const cable = createConsumer("ws://localhost:3000/cable")
        const parameters = {
            channel: "CommentsChannel",
            video_id: id,
        }
        const handlers = {
            received(data){
                setVidComments((vidComments)=>[...vidComments, data])
            },
            connected(){
                // console.log("connected")
            },
            disconnected(){
                // console.log('disconnected')
            }
        }
        cable.subscriptions.create(parameters, handlers)

    }, [id])


    const [username, setUserName] = useState("")

    fetch(`http://localhost:3000/users/${video.user_id}`)
    .then(r => r.json())
    .then(user => setUserName(user.username))


    function createComment(body) {
        const form = {body: body, user_id: user.id, video_id: video.id, likes: 0, dislikes: 0}

        fetch("http://localhost:3000/comments", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`},
            body: JSON.stringify(form)
        })
        
    }

    function handleLikes() {
        if (!liked) {
            setLiked(true)
            setLikes(likes + 1)
            fetch(`http://localhost:3000/videos/${id}`, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json"},
                body: JSON.stringify({...video, likes: likes})
            })
        }
        else {
            setLiked(false)
            setLikes(likes - 1)
            fetch(`http://localhost:3000/videos/${id}`, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json"},
                body: JSON.stringify({...video, likes: likes})
            })
        }
    }

    function handleDislikes() {
        if (!disliked) {
            setDisliked(true)
            setDislikes(dislikes + 1)
            fetch(`http://localhost:3000/videos/${id}`, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json"},
                body: JSON.stringify({...video, dislikes: dislikes})
            })
            }else {
                setDisliked(false)
                setDislikes(dislikes - 1)
                fetch(`http://localhost:3000/videos/${id}`, {
                    method: "PATCH", 
                    headers: {
                        "Content-Type": "application/json"},
                    body: JSON.stringify({...video, likes: dislikes})
                })
            }
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
        <div id="video-details">
            <h3 className="vidTitle">{video.title}</h3>
            <div className="created-at">{Date(video.created_at).split('G')[0]}</div>
            <div className="username">{username}</div>
        </div>
        <div className="vidstats">
            <section>{video.views} Views</section>
            <section>
                <span onClick={handleLikes}>👍 {likes}</span> 
                <span onClick={handleDislikes}>👎 {dislikes}</span>
            </section>
            <section>
                <FacebookShareButton url={video.url}><FacebookIcon size={30} round={true} /></FacebookShareButton>
                <TelegramShareButton url={video.url}><TelegramIcon size={30} round={true} /></TelegramShareButton>
                <TwitterShareButton url={video.url}><TwitterIcon size={30} round={true} /></TwitterShareButton>
            </section>

        </div>
        <Comments vidComments={vidComments} createComment={createComment} user={user}/>
        </div>
    )
}

export default VideoPage