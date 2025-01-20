const express = require('express')
const router = express.Router(); //router is a middleware
const Menu = require('./../models/menu'); //importing menu model


//for menu for post
router.post('/', async (req, res)=>{
    try{
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save(data);
      console.log('data saved');
      res.status(200).json(response);
      }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  
  // for menu for get
  router.get('/', async (req, res)=>{
    try{
      const data = await Menu.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
//comment addes for testing purpose
module.exports = router;