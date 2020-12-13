const bcrypt = require('bcryptjs'); //For encryption
const jwt = require('jsonwebtoken');//Token management
const db = require('../models'); // Info in our database

exports.signin = async (req, res, next)=>{
    try {
        const user = await db.user.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);//Confirm whether the non encrypted password inputed coincides with the encrypted data on the DB (model)
            if(passwordIsValid){
                //Gather the info from the model (database tables)
                //Second argument 'config.secret' is a secret key to encrypt the token
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }, 'config.secret',{
                    expiresIn: 3600, //seconds, i.e. 1hour
                });
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                })
            }else{
                res.status(401).json({
                    error: 'Error en el usuario o la contraseña'
                })
            }
        }else{
            res.status(404).json({
                error: 'Error en el usuario o la contraseña'
            })
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error -> '+ error
        })
        next(error);
    }
}

exports.register = async (req, res, next)=>{
    try {
        // Encrypt the password using bcrypt
        req.body.password = bcrypt.hashSync(req.body.password, 10);// Password string and how many times to execute the encrypting algorithm
        const user = await db.user.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        
    }
}

exports.list = async (req, res, next)=>{
    try {
        const user = await db.user.findAll();//Get averything from the database
        res.status(200).json(user); //200='ok' response, parse as json so it can be consumed    
    } catch (error) {
        
    }
}