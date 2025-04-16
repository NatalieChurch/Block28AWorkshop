import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Favorites from './components/Favorites'
import Home from './components/Home'
import IdRecipe from './components/IdRecipe'
import Login from './components/Login'
import Nav from './components/Nav'
import Recipes from './components/Recipes'
import Register from './components/Register'
import './App.css'

function App() {

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState(null);

  useEffect(()=>{
    const getRecipes = async () => {
      const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
      const data = await res.json()
      console.log(data)
      setRecipes(data)
    }
    getRecipes();
    console.log("First UseEffect")
  }, [])

  return (
    <>
     <div>

        <div id="navbar" style={{display:"flex", justifyContent:"space-between"}}>
          <Link to="/" >Home</Link>
          <Link to="/recipes" >Recipes</Link>
          <Link to="/favorites" >Favorites</Link>
          <Link to="/auth/login" >Login</Link>
          <Link to="/auth/register">Register</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/favorites" element={<Favorites recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes/:id" element={<IdRecipe recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />}/>
            <Route path="/auth/login" element={<Login token={token}/>} />
            <Route path="/recipes" element={<Recipes recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} token={token}/>} />
            <Route path="/auth/register" element={<Register setToken={setToken} />} />
          </Routes>
        </div>

     </div>
    </>
  )
}

export default App
