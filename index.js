const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');
const {sequelize} = require ('./database');
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static("public"));

app.set("view", __dirname + "/src/views");

app.set("view engine", "ejs");



// routes
app.use('/user', require('./routes/user.route'))


// configs
app.listen(4000, () =>{

   sequelize.sync() 
    .then(() => console.log("Db esta ok"))
    .catch(err => console.log("err"))
  console.log("La base de datos funciona ok")})
  