//
//Import our Dependecies
//

require('dotenv').config(); // Loads Environment Vars into process.env function
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override'); // not valid variable name with dashes- it gets confused
const fruitController = require('./controllers/fruits')
const path = require('path'); // make a route that sends a specific file, can use path file to send file correctly

//Database Connection
//true constant are capitalized-they never change
// const DATABASE_URL = process.env.DATABASE_URL;
// const CONFIG = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

//Establish Connection
// mongoose.connect(DATABASE_URL, CONFIG);

//Events opens/disconnect/errors
// mongoose.connection
//     .on("open", () => console.log("We in the building"))
//     .on("close", () => console.log("Mongo has left the building"))
//     .on("error", (error) => console.log(error));

// Our Models
// const Schema = mongoose.Schema
//const model = mongoose.model
// below is shorthand for above, same as below
// const { Schema, model } = mongoose;

//make fruits schema

// const fruitsSchema = new Schema({
//     name: String,
//     color: String,
//     readyToEat: Boolean
// })

//make fruit model

// const Fruit = model(' Fruit', fruitsSchema)

////
// App Object Setup

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

//Middleware
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

//Routes
app.use('/fruits', fruitController)
app.get('/', (req, res) => {
    res.send(" Your server is running you better go catch it");
})

// app.get('/', (req, res) => {
//     res.send(" Your server is running you better go catch it")
// })

//created seed Route

// app.get('/fruits/seed', (req, res) => {
//     const startFruits = [
//         { name: "Orange", color: "orange", readyToEat: false },
//         { name: "Grape", color: "purple", readyToEat: false },
//         { name: "Banana", color: "orange", readyToEat: false },
//         { name: "Strawberry", color: "red", readyToEat: false },
//         { name: "Coconut", color: "brown", readyToEat: false },
//     ];
//Delete all Fruits
//this places called to the collection, and says hey we want to delete
// and then we are going to the next thing, inside of there- make second phone call
//and create all thesefruits
// then going to respond with all fruits created
//     Fruit.deleteMany({}).then((data) => {
//         Fruit.create(startFruits).then((data) => {
//             res.json(data);
//         })
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

//index
// app.get('/fruits', (req, res) => {
//     Fruit.find({})
//         .then((fruits) => {
//             res.render("fruits/Index", { fruits })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

//New
// app.get('/fruits/new', (req, res) => {
//     res.render('fruits/New')
// })

//Delete
// app.delete('/fruits/:id', (req, res) => {
//     const { id } = req.params;
//     Fruit.findByIdAndDelete(id)
//         .then(() => {
//             res.redirect('/fruits')
//         })
//         .catch((error) => {
//             res.status(400).json({ error });
//         })
// })

//Update
// app.put('/fruits/:id', (req, res) => {
//     const id = req.params.id;
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

//     Fruit.findByIdAndUpdate(id, req.body, { new: true })
//         .then(() => {
//             res.redirect(`/fruits/${id}`)
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

//Create
// app.post('/fruits', (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

//     Fruit.create(req.body)
//         .then((createdFruit) => {
//             res.redirect(`/fruits/${createdFruit._id}`)
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

//Edit
// app.get('/fruits/:id/edit', (req, res) => {
//     const { id } = req.params
//     Fruit.findById(id)
//         .then((fruit) => {
//             res.render('fruits/Edit', { fruit })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

//Show 
//route handler function
//destructuring on line 115 const id = req.params.id
//     Fruit.findById(id, (err, foundFruit) => {
//         if (err) {
//         } else {
//         }
//     })
// })
// app.get('/fruits/:id', (req, res) => {
//     const { id } = req.params;

//     Fruit.findById(id)
//         .then((fruit) => {
//             res.render('fruits/Show', { fruit })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

// Server Listener

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

