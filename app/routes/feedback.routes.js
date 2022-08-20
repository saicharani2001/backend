module.exports = app => {
    const feedbacks = require("../controllers/feedback.controller.js");
    var router = require("express").Router();
    router.post("/",feedbacks.create);
    router.get("/",feedbacks.findAll);
    router.get("/:lid",feedbacks.findOne);
    // router.put("/:id",farmers.update);
    // router.delete("/:id",farmers.delete);
    // router.delete("/",farmers.deleteAll);
    app.use("/api/feedback", router);
};