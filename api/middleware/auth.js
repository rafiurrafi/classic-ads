const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

module.exports = function (req, res, next){
    const token = req.header('Authorization')
    if(!token){
        res.status(401).json({
        message : 'Unauthorized user'
        })
        }

    const verified = jwt.verify(token, secret)
    req.user = verified
    next()
}