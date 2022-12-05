import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipe, error, isPending } =  useFetch('http://localhost:8000/recipes/' + id);
    const history = useNavigate();
    
    const handleClick = () => {
        fetch('http://localhost:8000/recipes/'+ recipe.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        window.location = '/';
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
 
            <img src={recipe.url} alt="" height="200px"></img>

            <h2>{recipe.title}</h2>
            
            <div id='recipe-time'>Time: {recipe.time} min</div>
            <div id='recipe-description'>Description: {recipe.description}</div>
            <div id='recipe-ingredients'>Ingredients: {recipe.ingredient}</div>
            <div id='recipe-directions'>Directions: {recipe.directions}</div>
            <button onClick={handleClick}>Delete</button>
      
        </div>
     );
}
export default RecipeDetails;