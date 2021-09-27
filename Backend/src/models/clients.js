const {Schema , model}=require('mongoose')

const clientSchema = new Schema({
    nombre:{type:String,required:true},
    correo:{type:String,required:true},
    cedula:{type:String,required:true},
    telefono:{type:String,required:true},
},
{
    timestamps:true
})

module.exports =model('Client',clientSchema)
