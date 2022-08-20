module.exports = mongoose => {
    const Device=mongoose.model(
        "device",
        mongoose.Schema(
            {
                name:String,
                location:String,
                status:String
            }
        )
    );
    return Device;
};
