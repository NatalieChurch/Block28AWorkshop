import { useState, useEffect } from "react"

function Login ({token}) {

    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")
    const [error, setError] = useState(null);


    async function handleSubmit(event) {
        event.preventDefault();
    }


    async function handleClick() {
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                const result = await response.json();
                console.log(result)
        } catch (error) {
            console.error(error)
        }
    }


    return(
        <div>
            <h2>Login</h2>
            <hr style={{
                backgroundColor: "rgb(101, 126, 98)",
                height: "2px",
                border: "none",
                margin: "2px 0 20px 0"
            }} />
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* <label>
                    <input value={username} placeholder="Enter username here" minLength={7} onClick={handleClick} />
                </label>
                <label>
                    <input value={password} placeholder="Enter password here" onClick={handleClick} />
                </label> */}
                <button>Log in!</button>
            </form>
        </div>);

}



export default Login