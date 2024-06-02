const express = require('express')
const bodyParser = require('body-parser')
const DotEnv = require('dotenv')
const cors=require('cors')
const connectToMongoDb = require('./config/Db')

const app = express();

DotEnv.config()
connectToMongoDb();

//***body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());

//***cors */
app.use(cors());

app.get("/",(req, res)=>{
    res.send('Welcome');
})

// adminRouter setup
const adminRoute=require('./route/AdminRoute')
app.use('/admin',adminRoute)

// port setup
const Port = process.env.PORT || 7000;
app.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}`);
  });
  