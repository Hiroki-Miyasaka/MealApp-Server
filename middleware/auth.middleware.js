import { verifyToken, isTokenExpired } from "../service/jwt.service.js";

const auth = async(req, res, next) => {
    const token = req.headers.authorization;
    
    try{
        const decoded = verifyToken(token);

        if(isTokenExpired(token)){
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized!"
            })
        }

        req.user = decoded.id;
        next();
    }catch(err){
        return res.status(500).json({
            status: "fail",
            message: "Unauthorized!"
        })
    }
}

export default auth;