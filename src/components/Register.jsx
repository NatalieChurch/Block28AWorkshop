import { useState, useEffect } from "react";

function Register ({setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            const result = await response.json()
            console.log(result);
            setToken(result.token);
            localStorage.setItem("token", result.token)

    } catch (error){
        setError(error.message)
    }
}



useEffect(()=>{
    if(username, password){
        localStorage.setItem("Username", username);
        localStorage.setItem("Password", password);
    } else {

    }
})



return(
    <div>
        <h2>Sign Up Below</h2>
        <hr style={{
                backgroundColor: "rgb(101, 126, 98)",
                height: "2px",
                border: "none",
                margin: "2px 0 20px 0"
            }} />
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username here" minLength={7} />
            </label>
            <label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password here"/>
            </label>
            <button>Register!</button>
        </form>
    </div>);
}

export default Register