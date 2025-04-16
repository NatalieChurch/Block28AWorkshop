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

  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState(null);

  useEffect(()=>{
    const getRecipes = async () => {
      const res = await fetch("https://fsa-recipe.up.railway.app")
      const data = await res.json()
      setRecipes(data)
    }
    getRecipes();
    console.log("First UseEffect")
  })

  return (
    <>
     <div>

        <div id="navbar" style={{display:"flex", justifyContent:"space-between"}}>
          <Link to="/" style={{color:"black"}}>Home</Link>
          <Link to="/api/recipes" style={{color:"black"}}>Recipes</Link>
          <Link to="/api/favorites" style={{color:"black"}}>Favorites</Link>
          <Link to="/api/auth/login" style={{color:"black"}}>Login</Link>
          <Link to="/api/auth/register" style={{color:"black"}}>Register</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/api/favorites" element={<Favorites recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/api/recipes/:id" element={<IdRecipe recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />}></Route>
            <Route path="/api/auth/login" element={<Login/>}></Route>
            <Route path="/api/recipes" element={<Recipes recipes={recipes} setRecipes={setRecipes} favRecipes={favRecipes} setFavRecipes={setFavRecipes} />}></Route>
            <Route path="/api/auth/register" element={<Register/>}></Route>
          </Routes>
        </div>

     </div>
    </>
  )
}

export default App
