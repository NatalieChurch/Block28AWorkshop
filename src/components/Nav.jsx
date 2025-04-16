function Nav () {

    return (
        <nav>
            <Link to="/" style={{color:"white"}}>Home</Link>
            <Link to="/recipe" style={{color:"white"}}>Recipes</Link>
            <Link to="/favorites" style={{color:"white"}}>Favorites</Link>
            <Link to="/login" style={{color:"white"}}>Login</Link>
            <Link to="/register" style={{color:"white"}}>Register</Link>
        </nav>
    )

}

export default Nav