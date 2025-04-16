import { useNavigate } from 'react-router-dom'

function Recipes ({recipes, setRecipes, favRecipes, setFavRecipes, token}) {

    const navigate = useNavigate ()

    const handleClick = (recipes) => {
        if (!token) return (<p>No token</p>)
        setFavRecipes(recipes)
    }
    console.log(recipes)
    return (
        <>
        { recipes &&
            recipes.map((recipes) => 
                <div key={recipes.idMeal}>
                    <h1>{recipes.strMeal}</h1>
                    <img src={recipes.strMealThumb} style={{width:"200px"}}></img>
                    <h2>{recipes.strCategory}</h2>
                    <h2>{recipes.strArea}</h2>
                    <h3>{recipes.strTags}</h3>
                    <button onClick={()=>handleClick(recipes)}>Favorite this Recipe</button>
                    <button onClick={()=>navigate(`/recipes/${recipes.idMeal}`)}>See Details</button>
                </div>
            )
        }
        </>
    )

}

export default Recipes