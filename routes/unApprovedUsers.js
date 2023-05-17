const express = require('express');
const router = express.Router();
const Users = require("../model/user.js");
const axios = require('axios');


router.post('/approved/:id', async(req, res) => {
     
    try{

        const user = await Users.findById(req.params.id);

        if(user){

        const approved = await Users.deleteOne({_id: req.params.id});

        if(approved){
            return res.status(200).json(user);
        } else {
            return res.status(400).json({error: "please try again"});
        }
    }else {
        return res.status(404).json({error: "User not found"});
    }
    }catch(error){
  
    console.log("response");
    }
    
})


router.get('/:id', async(req, res) => {

    try{
        let user = await Users.findById(req.params.id);
        return res.status(200).json(user);
    }catch(err){
        return res.status(400).json({error: err,});
    }


}); 
router.get('/', async(req, res) => {
try{

    let users = await Users.find();
    return res.status(200).json(users);

}catch(err){
    return res.status(400).json({error: err,});
}

});

router.post('/',async(req, res) => {
try{

   

    
    
    let user = new Users({

        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        department_id: req.body.department_id,
        createdAt: Date.now(),
    })
    console.log(user.name);
    const newUser = await user.save();
    
    return res.status(200).json(newUser.id);
    

}catch(err){
    return res.status(400).json({error: err,});
}

});

module.exports = router;