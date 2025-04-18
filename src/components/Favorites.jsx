import { Link, useNavigate } from "react-router-dom"

function Favorites ({favRecipes, setFavRecipes}){

    const navigate = useNavigate();

    return(
        <div className="favorite">
            <p>{favRecipes?.strMeal}</p>
            <p>{favRecipes?.ingredients}</p>
            <p>{favRecipes?.strInstructions}</p>
            {/*<Link to="/" style={{color:"black"}}>Back to Home</Link>*/}
            <button onClick={()=>navigate("/")}>Return to Home</button>
            <button onClick={()=>setFavRecipes(null)}>Remove Favorite</button>
        </div>
    )

}

export default Favorites