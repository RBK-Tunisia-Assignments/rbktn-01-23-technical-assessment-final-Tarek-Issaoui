import React, { useState } from "react";
import "../App.css";

const RecepieCard = (props) => {
  const [show,setShow]=useState(false);
  const [obj,setObj]=useState(props.recipe)
  const handlChange=(e)=>{
    setObj(prev=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }
  return (
    <>
      <div className="card">
        <button className="delete" onClick={()=>props.remove(props.recipe.recepie_Id)}>delete</button>
        <button className="update" onClick={()=>setShow(!show)}>{show ? "Hide":"update"} </button>

        <>
          <div className="header">
            <img
              className="img"
              src={props.recipe.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food">{props.recipe.name}</h1>
            <i> {props.recipe.Prep_Time} Mins</i> <br />
            <i>Serves: {props.recipe.Serves}</i>
          </div>
        </>
        </div>
      {show && <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" name="recepie_Name" onChange={handlChange} value={obj.recepie_Name}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" name="Cook_Time" onChange={handlChange} value={obj.Cook_Time}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" name="Prep_Time" onChange={handlChange} value={obj.Prep_Time}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" name="Serves" onChange={handlChange} value={obj.Serves}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" name="categorie" onChange={handlChange} value={obj.categorie}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" name="recepie_Description" onChange={handlChange} value={obj.recepie_Description}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" name="recepie_Ingredients" onChange={handlChange} value={obj.recepie_Ingredients}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" name="recepie_Image" onChange={handlChange} value={obj.recepie_Image}/>
      </div>
      <button className="create-recipe-btn" onClick={()=>{
        setShow(!show)
        props.update(obj.recepie_Id,obj)}}>Edit Recipe</button>
    </div>}
        </>

    
  );
};

export default RecepieCard;
