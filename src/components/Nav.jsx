function Nav () {

    return (
        <nav>
            <Link to="/" style={{color:"black"}}>Home</Link>
            <Link to="/recipe" style={{color:"black"}}>Recipes</Link>
            <Link to="/favorites" style={{color:"black"}}>Favorites</Link>
            <Link to="/login" style={{color:"black"}}>Login</Link>
            <Link to="/register" style={{color:"black"}}>Register</Link>
        </nav>
    )

}

export default Nav