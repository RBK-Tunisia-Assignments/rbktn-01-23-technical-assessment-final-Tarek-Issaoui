import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = (props) => {
  console.log(props)
  return (
    <div>
      {props.searchData.map((e,i)=>{
        return (
          <div className="receipe-content-area" key={i}>
        <div className="container">
          <div className="header">
            <img className="img" src={e.recepie_Image} alt="food" />
         
          </div>
          <div className="text">
            <h1 className="food">{e.recepie_Name}</h1>
            <i >{e.Prep_Time} Mins</i>
            <i > Serves: {e.Serves} </i>

            <p className="info">{e.recepie_Ingredients}</p>
            <p className="info">{e.recepie_Description}</p>
          </div>
        </div>
      </div>
        )
      })}
      
      
    </div>
  );
};

export default Onerecepie;
