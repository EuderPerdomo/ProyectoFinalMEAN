const perovskitaCtrl={}

const Device = require('../models/perovskita')

perovskitaCtrl.getDevices = async (req,res)=>{
    const device= await Device.find()
    res.json(device)
}

perovskitaCtrl.createDevice = async(req,res)=>{
    const newDevice=new Device(req.body)
    await newDevice.save()
    res.send({message:'Device Created OK'})
}

perovskitaCtrl.getDevice=async (req,res)=>{
    //console.log(req.params.id)
    const device =await Device.findOne({_id: req.params.id})
    //Employee.findById(req.params.id)
    res.send(device)
}

perovskitaCtrl.editDevice= async (req,res)=>{
    await Device.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'Device Updated'})
}

perovskitaCtrl.deleteDevice=async(req,res)=>{
    await Device.findByIdAndDelete(req.params.id)
    res.json({status:'Device Deleted'})
}

module.exports = perovskitaCtrl