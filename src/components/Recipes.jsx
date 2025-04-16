import { useNavigate } from 'react-router-dom'

function Recipes (recipes, setRecipes, favRecipes, setFavRecipes) {

    const navigate = useNavigate ()

    const handleClick = (recipe) => {
        setFavRecipes(recipe)
    }

    return (
        <>
        {
            recipes.map((recipe) => 
                <div key={recipe.idMeal}>
                    <h2>{recipe.strMeal}</h2>
                    <button onClick={()=>handleClick(recipe)}>Favorite this Recipe</button>
                </div>
            )
        }
        </>
    )

}

export default Recipes