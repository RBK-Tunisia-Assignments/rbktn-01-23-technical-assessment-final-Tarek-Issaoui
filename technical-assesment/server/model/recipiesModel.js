const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    connection.query("SELECT * FROM recepie",callback)
};
const getFilter=(values,callback)=>{
    connection.query("SELECT * FROM recepie WHERE recepie_Name=?",values,callback)
}
const postRecipie=(values,callback)=>{
    connection.query("INSERT INTO recepie (recepie_Name, Cook_Time, Prep_Time,Serves,recepie_Ingredients,recepie_Image,categorie,recepie_Description,users_user_Id) VALUES (?,?,?,?,?,?,?,?,?);",values,callback)
}
const remove=(values,callback)=>{
    connection.query("DELETE FROM recepie WHERE recepie_Id=?",values,callback)
}
const update=(values,callback)=>{
    connection.query("UPDATE recepie SET recepie_Id=?, recepie_Name=?, Cook_Time=?, Prep_Time=?,Serves=?,recepie_Ingredients=?,recepie_Image=?,categorie=?,recepie_Description=?,users_user_Id=? WHERE recepie_Id=?",values,callback)
}


//for users
const getUser=(callback)=>{
    connection.query("SELECT * FROM users",callback)
}
const postUser=(values,callback)=>{
    connection.query("INSERT INTO users (username,email,password) VALUES (?,?,?)",values,callback)
}
module.exports = {postUser, getAll ,postRecipie,getUser,remove,update,getFilter};
