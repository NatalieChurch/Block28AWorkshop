function Home () {

    return (
    <div>
        <div className="home">
            <h1 style={{color: "white", fontSize: "45px"}}>Home</h1>
        </div>
        <div>
            <p>Welcome to the best recipe book on the internet! Here, we have a variety of fun goodies to make, including quick and easy meals, vegetarian-friendly cuisine, and healthy food to nourish your body. Tired of the same old menu? Don't worry! Now you can find food from all over the world, including Russia, Thailand, India, the Phillipines, and Mexico! </p>
            <p>Do you love this website? Do you want to share your own recipes with others who enjoy RecipeBook.com? Fill out the form below and let the world taste your masterpiece!</p>
            <form>
                <label>
                    <input placeholder="Enter recipe name"/>
                </label>
                <label>
                    <input placeholder="Submit link to an image of the recipe"/>
                </label>
                <label>
                    <input placeholder="Enter recipe category"/>
                </label>
                <label>
                    <input placeholder="Enter recipe locale"/>
                </label>
                <label>
                    <input placeholder="Enter recipe ingredients"/>
                </label>
                <label>
                    <input placeholder="Enter recipe instructions"/>
                </label>
                <label>
                    <input placeholder="Enter recipe tags"/>
                </label>
                <label>
                    <input placeholder="Enter link to a youtube tutorial"/>
                </label>
                <button style={{display:"flex", alignItems:"left"}} >Submit your idea!</button>

            </form>
        </div>
    </div>
    );
}

export default Home