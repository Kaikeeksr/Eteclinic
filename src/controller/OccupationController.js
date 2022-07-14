import express from "express";
import db from "../service/OccupationService.js"
import {body, validationResult} from 'express-validator'

//! criando constante para usar as rotas
const router = express.Router()

//! usando post na rota principal
//!yarn add express-validator
router.post('/',[
body('nome_profissao').notEmpty().withMessage('profissão não informada')
], async (req, res) => {

  //Inserindo validação em uma constante
  const errors = validationResult(req)

  //verificando se errors não é vazia
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }
  
  const {nome_profissao} = req.body
  //Envia os dados para a userService.js
  await db.InsertOccupation(nome_profissao)

    res.status(201).json({message:
      `${nome_profissao} foi cadastrado`
    })  
})

//! exportando o módulo "router"
export default router