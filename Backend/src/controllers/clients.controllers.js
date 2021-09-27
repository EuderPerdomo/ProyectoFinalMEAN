const clientsCtrl={}

const Client = require('../models/clients')

clientsCtrl.getClients = async (req,res)=>{
    const client= await Client.find()
    res.json(client)
    //console.log('requiere un cliente')
}

clientsCtrl.createClient = async(req,res)=>{
    const newClient=new Client(req.body)
    await newClient.save()
    res.send({message:'client Created OK'})
}

clientsCtrl.getClient=async (req,res)=>{
    //console.log(req.params.id)
    const client =await Client.findOne({_id: req.params.id})
    //Employee.findById(req.params.id)
    res.send(client)
}

clientsCtrl.editClient= async (req,res)=>{
    await Client.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'Client Updated'})
}

clientsCtrl.deleteClient=async(req,res)=>{
    await Client.findByIdAndDelete(req.params.id)
    res.json({status:'Client Deleted'})
}

module.exports = clientsCtrl