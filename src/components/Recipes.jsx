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
                    <h1>{recipe.strMeal}</h1>
                    <img>{recipe.strMealThumb}</img>
                    <h2>{recipe.strCategory}</h2>
                    <h2>{recipe.strArea}</h2>
                    <h2>{recipe.ingredients}</h2>
                    <h2>{recipe.strInstructions}</h2>
                    <h2>{recipe.strYoutube}</h2>
                    <h3>{recipe.strTags}</h3>
                    <button onClick={()=>handleClick(recipe)}>Favorite this Recipe</button>
                </div>
            )
        }
        </>
    )

}

export default Recipes