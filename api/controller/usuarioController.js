const express = require('express');

const usuarioModel = require('../model/usuarioModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE USUARIO(POST)*/
router.post('/usuario/inserir', (req,res)=>{

    let email = req.body.email;
    let senha = req.body.senha;
    let atividade_presente = req.body.atividade_presente
    
    usuarioModel.create(
        {
            email,
            senha,
            atividade_presente
        }
    ).then(
        ()=>{
            return res.status(201).json({
            errorStatus:false,
            mensageStatus:'USUARIO INSERIDO COM SUCESSO'
            });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

/* ROTA DE VERIFICAÇÃO DE USUARIOS(POST)*/
router.post('/usuario/verificar', (req,res)=>{

    let email = req.body.email;
    let senha = req.body.senha;
    let atividade_presente = req.body.atividade_presente;

    usuarioModel.findOne({
        where: {
          email: email,
          senha: senha
        }
    }).then((usuario) => {
        if (usuario) {
          return res.status(200).json({
            errorStatus: false,
            mensageStatus: 'Login bem-sucedido',
            userData: {
                id: usuario.id,
                email: usuario.email,
                atividade_presente: usuario.atividade_presente,
            }
          });
        } else {
          return res.status(401).json({
            errorStatus: true,
            mensageStatus: 'Credenciais inválidas'
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({
          errorStatus: true,
          mensageStatus: error.message
        });
    });
});

/* ROTA DE VERIFICAÇÃO DE EMAIL(POST)*/
router.post('/usuario/verificarEmail', (req,res)=>{

    let email = req.body.email;

    usuarioModel.findOne({
        where: {
          email: email,
        }
    }).then((usuario) => {
        if (usuario) {
          return res.status(200).json({
            errorStatus: false,
            mensageStatus: 'Conta já existe',
            userData: {
                id: usuario.id,
                email: usuario.email,
                atividade_presente: usuario.atividade_presente,
            }
          });
        } else {
          return res.status(401).json({
            errorStatus: true,
            mensageStatus: 'Conta não existe'
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({
          errorStatus: true,
          mensageStatus: error.message
        });
    });
});

/* ROTA DE ALTERAÇÃO DE USUARIO(PUT)*/
router.put('/usuario/alterar', (req, res) => {
    const { email, atividade_presente } = req.body;
  
    usuarioModel.update(
      { atividade_presente: atividade_presente },
      { where: { email: email } }
    )
      .then(() => {
        return res.status(200).json({
          errorStatus: false,
          mensageStatus: 'Status do usuário alterado com sucesso',
        });
      })
      .catch((error) => {
        return res.status(500).json({
          errorStatus: true,
          mensageStatus: error.message,
        });
      });
});

/* ROTA DE SELEÇÃO DE USUARIO(GET)*/
router.get('/usuario/selecionar', (req,res)=>{
    
    usuarioModel.findAll()
    .then(
        (usuarios)=>{
            console.log(usuarios);
            res.json(usuarios);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});
/* ROTA DE EXCLUSÃO DE USUARIO(DELETE)*/
router.delete('/usuario/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    usuarioModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'USUARIO EXCLUIDO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;