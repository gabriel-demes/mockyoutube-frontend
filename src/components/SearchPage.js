import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import VideoCard from "./VideoCard"


const SearchPage = () => {
    const params = useParams()
    const term = params["term"]

    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/videos')
        .then(r => r.json())
        .then(videos => {
            setFiltered(videos.filter(video => video.title.toLowerCase().includes(term.toLowerCase())))
        })
    },[term])

    const displayVids = () => {
        return filtered.map(video => <VideoCard key={term+video.title} video={video}/>)
    }

    

    return (
        <div>
            <h4>Results for: {`"${term}"`}</h4>
            {displayVids()}
        </div>
    )
}

export default SearchPage