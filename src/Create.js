import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

const Create = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [directions, setDirections] = useState("");
  
  const createRecipe = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>{
        const recipe = { url, title, time, description, ingredient, directions};
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        })
        window.location = '/';
      })
    })
  };

  return (
    <div className="create">
      <input 
        type="file" 
        onChange={(event) => {setImageUpload(event.target.files[0])}}
      />
      <label>Recipe Title</label>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Time</label>
      <input 
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label>Description</label>
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
     <label>Ingredients</label>
      <input 
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <label>Directions</label>
      <input 
        type="text"
        value={directions}
        onChange={(e) => setDirections(e.target.value)}
      />
    
      <button onClick={createRecipe}>Upload Image</button>
      
    </div>

  );
}

export default Create;
