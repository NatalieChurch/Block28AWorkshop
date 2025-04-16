import { useNavigate } from 'react-router-dom'

function Recipes (recipes, setRecipes, favRecipes, setFavRecipes) {

    const navigate = useNavigate ()

    const handleClick = (recipes) => {
        setFavRecipes(recipes)
    }

    return (
        <>
        {
            recipes.map((recipes) => 
                <div key={recipes.idMeal}>
                    <h1>{recipes.strMeal}</h1>
                    <img>{recipes.strMealThumb}</img>
                    <h2>{recipes.strCategory}</h2>
                    <h2>{recipes.strArea}</h2>
                    <h2>{recipes.ingredients}</h2>
                    <h2>{recipes.strInstructions}</h2>
                    <h2>{recipes.strYoutube}</h2>
                    <h3>{recipes.strTags}</h3>
                    <button onClick={()=>handleClick(recipes)}>Favorite this Recipe</button>
                </div>
            )
        }
        </>
    )

}

export default Recipes