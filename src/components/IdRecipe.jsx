import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

function IdRecipe () {

    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate()

    useEffect (() => {
        const getDetails = async () => {
            const res = await fetch (`https://fsa-recipe.up.railway.app/api/recipes/${id}`)
            const result = await res.json()
            setDetails(result)
            console.log(result)
        }
        getDetails();
    }, [])
    return (
        <>
        {details && (
            <div key={details.idMeal}>
                <h1>{details.strMeal}</h1>
                <img src={details.strMealThumb} style={{width:"200px"}}></img>
                <h2>{details.strCategory}</h2>
                <h2>{details.strArea}</h2>
                <h2>{details.ingredients}</h2>
                <h2>{details.strInstructions}</h2>
                <h2>{details.strYoutube}</h2>
                <h3>{details.strTags}</h3>
                <button onClick ={()=>navigate("/recipes")}>Go Back</button>
            </div>
        )}
        </>
    )

}

export default IdRecipe