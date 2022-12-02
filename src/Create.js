import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    //const [username, setUsername] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [directions, setDirections] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { image, title, time, description, ingredient, directions };
    
        setIsPending(true);

        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
        window.location = '/';
    }
///////////////////////////////////////////////////////////////////////////////////
/*
    function showPreview(event) {
        if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById('recipe-image');
        preview.src = src;
        preview.style.display = 'block';
        }
    }
*/
/////////////////////////////////////////////////////////////////////////////////// 



    return ( 
        <div className="create">
            <h2>Add a New Recipe</h2>

            <form >
                <label>Add Image</label>
                <img width='100px' src={image} id="recipe-image" alt="" />
                <input
                    type="file"
                    id="image-button"
                    accept="image/*"
                    value={image}
                    onChange={(e) => setImage(e.target.value)
                    }
                />
               

                <label>Recipe Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Time</label>
                <input
                    type="number"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Ingredients</label>
                <input
                    type="text"
                    required
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                />

                <label>Directions</label>
                <input
                    type="text"
                    required
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                />


                {!isPending && <button onClick={handleSubmit}>Add Recipe</button>}
                {isPending && <button onClick={handleSubmit} disabled>Adding Recipe</button>}
            </form>
        </div>
     );
}
 
export default Create;