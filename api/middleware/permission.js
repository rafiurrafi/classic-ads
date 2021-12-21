const json_decode = require("jwt-decode");
 
const permission = (userRole) => {

        return function (req, res, next){

            const token  = req.header("Authorization") //get the token from body input header
            if(!token) return res.status(401).json({
                message : 'Unauthorized user'
            })

            try{
                const decode = json_decode(token) //decode the token data
                const{ userType } = decode
                const verified = userRole.includes(userType) //chech userType from db/ token
                if(verified) next()
                
                else{
                    next(res.status(401).json({
                        message : 'You are not valid user'
                    }))
                     }
                }
                catch(err){
                    res.status(401).json({
                        message : 'You dont have permission to access this api'
                    })
                }
            
     }
}
 
module.exports = {
    permission
}