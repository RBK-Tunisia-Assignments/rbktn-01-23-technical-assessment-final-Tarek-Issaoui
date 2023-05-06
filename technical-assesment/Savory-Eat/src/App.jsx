//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState}from "react";
import "./App.css";
import OneRecipie from './components/OneRecipie'
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx";
import Add from "./components/Add.jsx";
import axios from 'axios'
function App() {
const [food,setFood]=useState('')
const [view,setView]=useState('Home')
  let changeView = (view) => {
    setView(view);
  };
  const [searchData,setSearchData]=useState([])
  const search=async(str)=>{
    const res=await axios.get(`http://localhost:4000/api/recepies/search/${food}`)
    setSearchData(res.data)
  }
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  onChange={(e)=>setFood(e.target.value)}/>
          <button onClick={()=>{
            search(food)
            setView('search')
            }}>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies />}
      {view === "Addrecepie" && <Add />}
      {view === "search" && <OneRecipie searchData={searchData}/>}
      <div></div>
    </div>
  );
}

export default App;
