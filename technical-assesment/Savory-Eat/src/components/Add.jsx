import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Add = () => {
  const [obj,setObj]=useState({  
  recepie_Name: "",
  Cook_Time: 0,
  Prep_Time: 0,
  Serves: 0,
  recepie_Ingredients: "",
  recepie_Image: "",
  categorie: "",
  recepie_Description: "",
  users_user_Id:1
});
const handlChange=(e)=>{
  setObj(prev=>{
    return {
      ...prev,
      [e.target.name]:e.target.value
    }
  })
}
console.log(obj)
const addRecipe=async()=>{
  await axios.post("http://localhost:4000/api/recepies",obj)
}
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" name="recepie_Name" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" name="Cook_Time" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" name="Prep_Time" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" name="Serves" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" name="categorie" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" name="recepie_Description" onChange={handlChange}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" name="recepie_Ingredients" onChange={handlChange}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" name="recepie_Image" onChange={handlChange}/>
      </div>
      <button className="create-recipe-btn" onClick={()=>addRecipe()}>Create Recipe</button>
    </div>
  );
};
export default Add;
