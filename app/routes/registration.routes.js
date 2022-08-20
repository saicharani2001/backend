module.exports = app => {
    const users = require("../controllers/registration.controller.js");
    var router = require("express").Router();
    router.post("/",users.create);
    router.get("/",users.findAll);
    router.get("/:lid",users.findOne);
    router.put("/:id",users.update);
    router.delete("/:id",users.delete);
    // router.delete("/",farmers.deleteAll);
    app.use("/api/registration", router);
};