const {Schema , model}=require('mongoose')

const deviceSchema = new Schema({
    model:{type:String,required:true},
    serialnumber:{type:String,required:true},
},
{
    timestamps:true,
    versionKey:false
})

module.exports =model('Device',deviceSchema)

