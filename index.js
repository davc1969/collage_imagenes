const express = require("express");
const app = express();
require("dotenv").config()
const expressFileUpload = require("express-fileupload");
const { routes } = require("./routes/routes");

const PORT = process.env.PORT || 3000;


//Middleware para configurar la subida de archivos al servidor
app.use( expressFileUpload({
        limits: { fileSize: 5000000 },
        abortOnLimit: true,
        responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido"
    })
);

app.use("/imgs", express.static(__dirname + "/public/imgs"))

app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is up and listening by port ${PORT}, process ${process.pid}`);
})



