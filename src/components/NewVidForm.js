import {useState} from "react"

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
            <form  onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" onChange={e=>setTitle(e.target.value)} value={title}></input>
                <label>Desciption</label>
                <textarea type="text" name="title" onChange={e=>setDescription(e.target.value)} value={description}></textarea>
                
                <label>Upload Video</label>
                <input type="file" name="video" onChange={e=>setVideo(e.target.files[0]) }/>
                <label>Upload Thumbnail</label>
                <input type="file" name="thumbnail"  onChange={e=>setImage(e.target.files[0])}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default NewVidForm