const User = require("../models/user");

const addUser = async(req,res)=>{
  try {
    const {name,email,phone,website,photo}=req.body

    if(!name || !email ||!phone || !website || !photo ){
        return res.status(422).json({message:"plz include all field ",status:"failed"})
    }

     let user  = new User({name,email,phone,website,photo})
     await user.save();
     return res.status(201).json({user:user,message:"successfully added",status:"success"})
    
  } catch (err) {
   return res.status(500).json({err:err.message,message:"something went wrong",status:"failed"})    
  }
}


const getAllUser = async(req,res)=>{
    try {
        // console.log("get token role",req.role)
        const result = await User.find();
        if(result.length<0)
        return res.status(400).json({error:"unable to get the product",status:"failed"});
        return res.status(200).json({result:result,message:"successfully  get all the product",status:"success"});



        
    } catch (err) {
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
        
    }
}

const getUserById = async(req,res)=>{
    try {
        let result = await User.findById(req.params.id);
        if(!result)
        return res.status(400).json({error:"unable to get the product details",status:"failed"});
        return res.status(200).json({result:result,message:"successfully  get the product",status:"success"});

        
    } catch (err) {
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
        
    }
}

const updateDetails = async(req,res)=>{
     console.log("hiiii",req.body);
    let result = await User.updateOne(
      {_id:req.params.id},
      {$set:req.body}
    );
    console.log("hello result",result);
    res.json({result});
    
  }

  const deleteUser = async(req,res)=>{
    let id = req.params.id;
    console.log("hii",id);
    let user = await User.findByIdAndRemove(id);
    if(!user){
        return res.status(400).json({message:"unable to delete"})
    }else{
        return res.status(200).json({message:"Succesfully deleted"})
    }
}


module.exports = {addUser,getAllUser,getUserById,updateDetails,deleteUser}