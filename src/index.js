//?===================================IMPORTS========================================

import express  from "express";
import routes  from "./routes.js";

//?==================================================================================

//! criando uma constante para atribuí-la o express
const app = express()

//! para a transformação em JSON ser ativada
app.use(express.json())

//! ativando as rotas na routes.js
app.use('/', routes)

//! abrindo a ports 3333 no servidor
app.listen(3333, () => {console.log("Server running ✅")})






//! npm install -g nodemon || yarn add nodemon -g
