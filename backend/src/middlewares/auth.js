import bccrypt from 'bccryp';

export function authHeader(req, res, next) {
    const {email, password} = req.header;

    if(!email || !password) {return res.status(401).json({success:false, error:'falta email o contraseña'})}
}