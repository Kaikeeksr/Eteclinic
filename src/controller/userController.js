//?===================================IMPORTS========================================

import express, { response }  from "express";
import db from "../service/userService.js"
import {body, validationResult} from 'express-validator'

//?==================================================================================


//! criando constante para usar as rotas
const router = express.Router()


router.post('/', [
  body("email").isEmail().withMessage("Email informado é invalido.")
], async (req, res) => {

  //Inserindo validação em uma constante
  const errors = validationResult(req)

  //verificando se errors não é vazia
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }
  
  const {email, password, user} = req.body
  //Envia os dados para a userService.js
  await db.insertUser(email, password, user)

    res.status(201).json({message:
      `${user} foi cadastrado`
    })  
})

//! exportando o módulo "router"
export default router
