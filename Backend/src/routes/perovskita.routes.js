const {Router} = require('express')
const router = Router()

const perovskitaCtrl =require('../controllers/perovskita.controllers')

router.get('/',perovskitaCtrl.getDevices)
router.post('/',perovskitaCtrl.createDevice)
router.get('/:id',perovskitaCtrl.getDevice)
router.put('/:id',perovskitaCtrl.editDevice)
router.delete('/:id',perovskitaCtrl.deleteDevice)

module.exports = router