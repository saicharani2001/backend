const db=require("../models");
const Manager=db.managers;
exports.create=(req,res)=>{
    const managers=new Manager({
        fullname:req.body.fullname,
        age:req.body.age,
        licenseId:req.body.licenseId,
        phone:req.body.phone,
        password:req.body.password,
        city:req.body.city,
        place:req.body.place,
        street:req.body.street,
        pincode:req.body.pincode,
        role:"manager"
    });
    managers.save(managers)
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
    Manager.findOne({licenseId:id})
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

    Manager.find()
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
exports.deleteOne=(req,res)=>{
    const id=req.params.id;
    Manager.deleteOne({licenseId:id})
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
    Manager.updateOne({licenseId:id},req.body)
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