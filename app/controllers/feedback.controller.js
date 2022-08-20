const db=require("../models");
const Feedback=db.fbk;
exports.create=(req,res)=>{
    const feedback=new Feedback({
        location:req.body.location,
        issues:req.body.issues,
        lid:req.body.lid
    });
    feedback.save(feedback)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while submitting feedback."
    });
});
};
exports.findAll=(req,res)=>{

    Feedback.find()
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

exports.findOne=(req,res) => {
    const id=req.params.id;
    Feedback.findById(id)
    .then(data =>{
        if (!data)
        res.status(404).send({message:"Not found Tutorial withh id"+id});
        else res.send(data);
     })
     .catch(err =>{
         res.status(500).send({message:"Error retrieving Tutorialwith id"+id});
     });
};