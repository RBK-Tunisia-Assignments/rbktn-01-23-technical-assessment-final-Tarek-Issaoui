const express = require("express");
const cors=require('cors');
const route=require('./routes/recipiesRoute.js')

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route)

// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


// {
//   "recepie_Name": "Spaghetti Carbonara",
//   "Cook_Time": 15,
//   "Prep_Time": 10,
//   "Serves": 2,
//   "recepie_Ingredients": "8 oz spaghetti,2 large eggs,1/2 cup grated Parmesan cheese,4 slices bacon, 2 cloves garlic, minced Sat and pepper",
//   "recepie_Image": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   "categorie": "dinner",
//   "recepie_Description": "Spaghetti Carbonara is a classic Italian dish made with spaghetti, eggs, pancetta, and cheese. The sauce is made by combining raw eggs with hot pasta to create a creamy, rich coating. It's a quick and easy meal that's perfect for a weeknight dinner.",
//   "users_user_Id":1
// }