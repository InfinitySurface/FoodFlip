import { Link } from 'react-router-dom';

const RecipeList = ({recipes, title}) => {
    
    return ( 
        
        <div className="blog-list">
            <h2>{title}</h2>
            {recipes.map(recipe => (
                <div className="blog-preview" key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                        <img src={recipe.url} className="recipe-list-image" alt="" width="300px" height="490px"/>
                        <h2>{recipe.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;