const {Router} = require('express')
const routerClients = Router()

const clientsCtrl =require('../controllers/clients.controllers')

routerClients.get('/',clientsCtrl.getClients)
routerClients.post('/',clientsCtrl.createClient)
routerClients.get('/:id',clientsCtrl.getClient)
routerClients.put('/:id',clientsCtrl.editClient)
routerClients.delete('/:id',clientsCtrl.deleteClient)

module.exports = routerClients