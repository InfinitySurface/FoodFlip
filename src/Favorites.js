import RecipeList from './RecipeList';
import useFetch from './useFetch';

const Favorites = () => {
    const {data: recipe, isPending, error} = useFetch('http://localhost:8001/favorites');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <RecipeList recipes={recipe} title=""/>
        </div>
     );
}

export default Favorites; 