const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/',async (req,res)=>{
    try{
        
        const data = req.body // assuming the request body contains the person data
      
        // create a new Person document using the mongoose model
        const newPerson = new Person(data); //below given is stored into data.  not need to write like this
        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.mobile = data.mobile;
        // newPerson.email = data.email;
        // newPerson.address = data.address;
    
        
        
      // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
       }
       catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    
       }
    })

    //GET method to get the person

    router.get('/',async (req, res)=>{
        try{
         const data = await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
        }catch(err){
         console.log(err);
         res.status(500).json({error:'Internal Server Error'});
        }
     
     })

    //worktype parameter
router.get('/:workType', async(req, res)=>{
    try{
      const workType = req.params.workType; //extract the work type from the url parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      
      const response = await Person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(response);
  
    } else{
      res.status(404).json({error:'Invalid work type'});
  
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internak server error'});
    }
  
    })

    //update the person details

    router.put('/:id', async (req, res)=>{
        try{
        const personId = req.params.id; //extract id from url
        const updatedPersonData = req.body;  //update data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true, //Return the updated document
            runValidators: true, //Run Mongoose validaton
        });

        if(!response){
          return res.status(404).json({error: 'Person not found'});
        }
       
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internak server error'});
    }
})

router.delete('/:id', async (req, res)=>{
  try{
    const personId = req.params.id; //extract the person's ID from the URL parameter

    //Assuming you have a person model

    const  response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error: 'Person not found'});
  

  }
  console.log('data deleted');
  res.status(200).json({message: 'person Deleted Successfully'});
}catch(err){
  console.log(err);
   res.status(500).json({error: 'Internal server error'});
  }
})
    module.exports = router;