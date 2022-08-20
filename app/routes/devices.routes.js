module.exports = app => {
    const devices = require("../controllers/devices.controller.js");
    var router = require("express").Router();
    router.post("/",devices.create);
    router.get("/",devices.findAll);
    router.get("/:lid",devices.findOne);
    router.put("/:id",devices.update);
    router.delete("/:id",devices.deleteOne);
    // router.delete("/",farmers.deleteAll);
    app.use("/api/device", router);
};