import {useState} from "react"
import { Link } from 'react-router-dom'
import {useHistory} from "react-router-dom"


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const history = useHistory()


    return (
        <form id="searchbar" >
            <input type="text" id="search-input" placeholder="search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <Link to={`/search/${searchTerm}`}>
                <button>🔍</button>
            </Link>
            
        </form>
    )
}

export default Search