const fs = require("fs");
const path = require("path");


const uploadImg = (req, res) => {
    const { posicion } = req.body;
    const archivo = req.files ? req.files.target_file : null;

    if (!posicion || !archivo) {
        res.status(500).send("<h3>No se puede procesar imagen, falta información</h3>");
    } else {
        archivo.mv(path.join(__dirname, "../public/imgs/imagen-" + posicion + ".jpg"), (error) => {
            if (error) { 
                console.log("Error al cargar la foto ", error.message);
                res.status(500).send("<h3>No se puede procesar imagen, falta información</h3>");
            } else {
                console.log("Imagen cargada exitosamente");
                res.redirect("/collage")
            }
        });
    }
};


const showCollage = (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/collage.html"));
};


const deleteImg = (req, res) => {
    const { filename } = req.params;
    fs.unlink(path.join(__dirname, "../public/imgs/", filename), (error) => {
        res.redirect('back');
    })
}

module.exports = {
    uploadImg,
    showCollage,
    deleteImg
}