module.exports = mongoose => {
    const Feedback =mongoose.model(
        "feedback",
        mongoose.Schema(
            {
                location:String,
                issues:String,
                lid:String
            }
        )
    );
    return Feedback;
};
