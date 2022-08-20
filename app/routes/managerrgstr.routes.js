module.exports = app => {
    const managers = require("../controllers/managerrgstr.controller.js");
    var router = require("express").Router();
    router.post("/",managers.create);
    router.get("/",managers.findAll);
    router.get("/:lid",managers.findOne);
    router.put("/:id",managers.update);
    router.delete("/:id",managers.deleteOne);
    // router.delete("/",farmers.deleteAll);
    app.use("/api/manager", router);
};