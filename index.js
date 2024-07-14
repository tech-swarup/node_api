const express = require('express')                      // Import the Express module
const bodyParser = require('body-parser')
const DotEnv = require('dotenv')
const cors=require('cors')
const connectToMongoDb = require('./config/Db')

const app = express();                                      // Create an Express Application

DotEnv.config();       // This function reads the .env file and assign them to process.env
const start = async () => {
    try {
        await connectToMongoDb();
    }catch(error) {
        console.log(error)
    }
}

start()

//***body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());

//***cors */
app.use(cors());

app.get("/",(req, res)=>{
    res.status(201).send('Welcome to MERN App');
})

// adminRouter setup
const adminRoute=require('./route/AdminRoute')
app.use('/admin',adminRoute)

// port setup
const Port = process.env.PORT || 7000;
app.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}`);
});
  