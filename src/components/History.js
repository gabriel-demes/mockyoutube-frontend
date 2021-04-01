import '../css/VideoContainer.css'
import VideoCard from './VideoCard'

const History = () => {

    const onlyUnique = (value, index, self) => self.indexOf(value) === index;
    
    const watchedList = JSON.parse(localStorage.getItem("vidHistory"))
    const unique = Array.from(new Set(watchedList.map(vid => vid.id))).map(id => {
        return{
            id: id,
            title: watchedList.find(s => s.id === id).title,
            user: watchedList.find(s => s.id === id).user, 
            thumbnail: watchedList.find(s => s.id === id).thumbnail
        }
    })



    const myHistory = unique.map(video => <VideoCard key={`history${video.id}`} video={video}/>)

    return(
        <section>
            {myHistory}
        </section>
    )
}

export default History