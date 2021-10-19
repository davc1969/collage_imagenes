const routes = require("express").Router();
const path = require("path");
const imgs = require("../controller/imagenes")


routes.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/formulario.html"));
});


routes.post("/imagen", (req, res) => {
    imgs.uploadImg(req, res);
});


routes.get("/collage", (req, res) => {
    imgs.showCollage(req, res);
})

routes.get("/deleteImg/:filename", (req, res) => {
    imgs.deleteImg(req, res);
})


module.exports = {
    routes
};

