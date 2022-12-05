import RecipeList from './RecipeList';
import useFetch from './useFetch';

const Home = () => {
    const {data: recipe, isPending, error} = useFetch('http://localhost:8000/recipes');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <RecipeList recipes={recipe} title=""/>
        </div>
     );
}

export default Home; 