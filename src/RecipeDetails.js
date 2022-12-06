import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import './css/RecipeDetails.css'

/*eslint-disable*/

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipe, error, isPending } =  useFetch('http://localhost:8000/recipes/' + id);
    const history = useNavigate();

    // used to check if user is logged in 
    const loggedIn = (localStorage.getItem('user'));
    
    const handleClick = () => {
        fetch('http://localhost:8000/recipes/'+ recipe.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        fetch('http://localhost:8001/favorites/'+ recipe.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        window.location = '/';
    }

    // if user is logged in add recipe to favorites
   function addFavorite(){
        const url = recipe.url;
        const title = recipe.title;
        const time = recipe.time;
        const description = recipe.description;
        const ingredient = recipe.url;
        const directions = recipe.directions;
        const id = recipe.id;

        const favorites = { url, title, time, description, ingredient, directions, id};
        fetch('http://localhost:8001/favorites', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(favorites)
        })
        alert('Recipe was added to favorites!');
   }
   
   // if user is not logged in rederect to login page
   function toLogin(){
        window.location = '/login';
   } 

    return ( 
        <div className="blog-details">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <img className="recipe-image" src={recipe.url} alt="" height="200px"></img>

            <div className="recipe-details-box1">
                <div className="recipe-title">{recipe.title}</div>

                <div className="recipe-time" id='recipe-time'>
                    <span class="material-symbols-outlined">timer</span> {recipe.time} min
                </div>

                <p className='recipe-description' id='recipe-description'>{recipe.description}</p>

                <div className="recipe-details-box2">
                    <a className="print-recipe" href='javascript:window.print()'>
                    <span class="material-symbols-outlined">print</span>
                    </a>

                    <a className="share-recipe" href="mailto:?subject=Try this recipe!&body=localhost:3000/recipes/{recipe.id}">
                        <span class="material-symbols-outlined">share</span>
                    </a>
                    {loggedIn ?
                        (<button onClick={addFavorite} className="add-favorite" >
                            <span class="material-symbols-outlined">favorite</span>
                        </button>):
                        ((<button onClick={toLogin} className="add-favorite">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>))
                    }
                    
                </div>
            </div>

            <div className="recipe-details-box3">
                <table >
                    <tbody>
                    <tr>
                        <th className="ingredients-th">
                            Ingredients
                        </th>
                        <th>
                            Directions
                        </th>
                    </tr>
                    <tr>
                        <td className="ingredients-td">
                            <div className='recipe-ingredients' id='recipe-ingredients'> {recipe.ingredient}</div>
                        </td>
                        <td className='directions-td'> 
                            <div className='recipe-directions' id='recipe-directions'>{recipe.directions}</div>
                        </td>
                    </tr> 
                    </tbody>  
                </table> 
            </div>
            
            <button className="delete-recipe" onClick={handleClick} hidden>Delete</button>

        </div>
     );
}
export default RecipeDetails;