module.exports = mongoose => {
    const User =mongoose.model(
        "user",
        mongoose.Schema(
            {
                fullname:String,
                age:Number,
                licenseId:String,
                phone:Number,
                password:String,
                city:String,
                place:String,
                street:String,
                pincode:Number,
                role:String,
                status:String
            }
        )
    );
    return User;
};
