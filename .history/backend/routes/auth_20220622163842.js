const express=require('express');
const router=express.Router();
const User=require('../models/User');

router.get('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body)
    res.json([]);
})

module.exports=router