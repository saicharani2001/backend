const db=require("../models");
const Device=db.devices;
exports.create=(req,res)=>{
    const devices=new Device({
        name:req.body.name,
        location:req.body.location,
        status:"inactive",   
    });
    devices.save(devices)
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
    Device.findOne({licenseId:id})
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

   Device.find()
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
    Device.deleteOne({licenseId:id})
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
    Device.updateOne({licenseId:id},req.body)
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