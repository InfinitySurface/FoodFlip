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
   // var filename = "\"../public/images/" + recipe.image.replace(/^.*?([^\\]*)$/, '$1') + "\"";
    //document.getElementById("content").innerHTML = `<img src='${filename}'>`;
  
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
         
            <img id="target" src={this.state.image}/>
            <img src={require('./images/spaghett.jpeg')} alt="" height="200px"></img>
        
           
            <h2>{recipe.title}</h2>
            
            <div id='recipe-time'>Time: {recipe.time} min</div>
            <div id='recipe-description'>Description: {recipe.description}</div>
            <div id='recipe-ingredients'>Ingredients: {recipe.ingredients}</div>
            <div id='recipe-directions'>Directions: {recipe.directions}</div>
            <button onClick={handleClick}>Delete</button>
      
        </div>
     );
}
 
export default RecipeDetails;