import {useState, } from "react"
import { useHistory } from "react-router";


const SignUp = ({setUser}) => {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: ""
        }
    );
    const [errors, setErrors] = useState([])
    const history = useHistory();
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=> {
            return r.json().then(data => {
                if (r.ok) {
                    return data
                } else {
                    throw data
                }
            })})
        .then(data => {
            const {user, token} = data
            localStorage.setItem("token", token)
            setUser(user)
            history.push("/home")
        })
        .catch(data => {
            setErrors(data.errors)
        })
    }
    const { name, username, password } = formData;
    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            {errors.map(err => <p key={err}>{err}</p>)}
            <h1>SignUp</h1>
            <label>Name</label>
            <input 
                type="text"
                name="name"
                value={name}
                onChange={handleChange} 
            />
            <label>Username</label>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={handleChange} 
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange}
            />
            
            <button type="submit">Sign Up</button> 
        </form>
    )

}

export default SignUp