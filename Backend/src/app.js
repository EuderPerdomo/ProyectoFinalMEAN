const express=require('express')
const morgan=require('morgan')
const cors=require('cors')

const app=express()

app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))//Permite el envio de informacion con Json

app.use("/api/devices",require('./routes/perovskita.routes'))
app.use("/api/clients",require('./routes/clients.routes'))
module.exports=app