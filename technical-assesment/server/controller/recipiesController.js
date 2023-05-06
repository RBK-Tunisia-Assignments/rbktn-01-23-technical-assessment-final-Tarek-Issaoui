// const connection=require('')
const x=require("../model/recipiesModel.js")
const getrecepie = (req, res) => {
  x.getAll((err,result)=>{
    if(err) res.json(err)
    res.json(result)
  })
};
const addrecepie=(req,res)=>{
  x.postRecipie([req.body.recepie_Name,req.body.Cook_Time,req.body.Prep_Time,req.body.Serves,req.body.recepie_Ingredients,req.body.recepie_Image,req.body.categorie,req.body.recepie_Description,req.body.users_user_Id],
    (err,result)=>{
      if (err) res.json(err)
      res.json('created')
    })
}
const removeRecepie=(req,res)=>{
  x.remove([Number(req.params.recepie_Id)],(err,result)=>{
    if(err) res.json(err)
    res.json('deleted')
  })
}
const updateRecepie=(req,res)=>{
  x.update([req.params.recepie_Id ,req.body.recepie_Name,req.body.Cook_Time,req.body.Prep_Time,req.body.Serves,req.body.recepie_Ingredients,req.body.recepie_Image,req.body.categorie,req.body.recepie_Description,req.body.users_user_Id,req.params.recepie_Id],
    (err,result)=>{
      if(err) res.json(err);
      res.json('updated')
    })
}

const getFilterController=(req,res)=>{
  x.getFilter([req.params.recepie_Name],(err,result)=>{
    if (err) res.json(err);
    res.json(result)
  })
}
//users method
const addUser=(req,res)=>{
  x.postUser([req.body.username,req.body.email,req.body.password],(err,result)=>{
    if(err) res.json(err);
    res.json('created')
  })
};
const allUser=(req,res)=>{
  x.getUser((err,result)=>{
    if(err) res.json(err);
    res.json(result)
  })
}
module.exports = {
  addUser, getrecepie,addrecepie, allUser,removeRecepie,updateRecepie,getFilterController
};
