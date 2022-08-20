const db=require("../models");
const User=db.users;
exports.create=(req,res)=>{
    const users=new User({
        fullname:req.body.fullname,
        age:req.body.age,
        licenseId:req.body.licenseId,
        phone:req.body.phone,
        password:req.body.password,
        city:req.body.city,
        place:req.body.place,
        street:req.body.street,
        pincode:req.body.pincode,
        role:"driver",
        status:"inactive"
    });
    users.save(users)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the Tutorial."
    });
});
};
exports.findOne=(req,res)=>{
    const id=req.params.lid;
    User.findOne({licenseId:id})
    .then(data =>{
        if (!data)
        res.status(404).send({message:"Not found Tutorial withh id"+id});
        else res.send(data);
     })
     .catch(err =>{
         res.status(500).send({message:"Error retrieving Tutorialwith id"+id});
     });
};
exports.findAll=(req,res)=>{

    User.find()
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while retrieving tutorials."
        });
    });

};
exports.delete=(req,res)=>{
    const id=req.params.id;
    User.deleteOne({licenseId:id})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while deleting driver details."
        });
    })
};
exports.update=(req,res)=>{
    const id=req.params.id;
    User.updateOne({licenseId:id},req.body)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                 err.message || "Some error occured while updating driver details."
        });
    })
};