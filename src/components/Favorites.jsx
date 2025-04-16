import { Link } from "react-router-dom"

function Favorites ({favRecipes, setFavRecipes}){

    return(
        <>
            <p>{favRecipes?.strMeal}</p>
            <Link to="/" style={{color:"black"}}>Back to Home</Link>
            <button onClick={()=>setFavRecipes(null)}>Remove Favorite</button>
        </>
    )

}

export default Favorites