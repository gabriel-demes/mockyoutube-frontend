import '../css/VideoContainer.css'
import VideoCard from './VideoCard'

const History = () => {

    const onlyUnique = (value, index, self) => self.indexOf(value) === index;
    
    const watchedList = JSON.parse(localStorage.getItem("vidHistory"))
    const unique = watchedList.filter(onlyUnique)



    const myHistory = unique.map(video => <VideoCard key={`history${video.id}`} video={video}/>)

    return(
        <section>
            {myHistory}
        </section>
    )
}

export default History