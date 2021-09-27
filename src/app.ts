import express from "express"
import path from "path"
const app = express()
const PORT = process.env.PORT || 3030
// setting up middlewares

app.use(express.json())


//import index router
//importing the routers



//SETTING UP TEMPLATING ENGINES
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'pug')

require('./routes/routes')(app)





//listening to the port 
app.listen(PORT, ()=>{
    console.info(`Server started at port ${PORT}`)
})