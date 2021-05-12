import {useState} from "react"
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")


    return (
        <form id="searchbar" >
            <input type="text" id="search-input" placeholder="search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <Link to={`/search/${searchTerm}`}>
                <button type="submit"> <SearchIcon/> </button>
            </Link>
            
        </form>
    )
}

export default Search