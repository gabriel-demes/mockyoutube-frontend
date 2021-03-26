import {useState} from "react"
import '../css/NewVidForm.css'

const NewVidForm = () => {

    const[newVideo, setVideo] = useState("")
    const[newImage, setImage] = useState("")
    const[title, setTitle]= useState("")
    const[description, setDescription]= useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData()
        form.append("newImage", newImage)
        form.append("newVideo", newVideo)
        form.append("title",title)
        form.append("description", description)
        setDescription("")
        setImage("")
        setTitle("")
        setVideo("")

        fetch("http://localhost:3000/videos", {
            method: "POST",
            body: form
        })
        .then(r => r.json())
        .then(video => console.log(video))
    }




    return(
        <div className="new-video-div">
            <form onSubmit={handleSubmit} id="new-video-form">
                <div className="input-control">
                    <label>Title</label>
                    <input type="text" name="title" onChange={e=>setTitle(e.target.value)} value={title}></input>
                </div>
                
                <div className="input-control">
                    <label>Description</label>
                    <textarea type="text" name="title" onChange={e=>setDescription(e.target.value)} value={description}></textarea>
                </div>

                <div className="input-control">
                    <label>Upload Video</label>
                    <input type="file" name="video" onChange={e=>setVideo(e.target.files[0]) }/>
                </div>

                <div className="input-control">
                    <label>Upload Thumbnail</label>
                    <input type="file" name="thumbnail"  onChange={e=>setImage(e.target.files[0])}/>
                </div>

                <div className="input-control">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default NewVidForm