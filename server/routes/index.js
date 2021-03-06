const express=require('express')
const router=express.Router()
const deviceRouter=require('./deviceRouter')
const brandRouter=require('./branddRouter')
const typeRouter=require('./typeRouter')
const userRouter=require('./userRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)

module.exports=router