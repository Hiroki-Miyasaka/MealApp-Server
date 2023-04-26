import { verifyToken, isTokenExpired } from "../service/jwt.service";

const auth = async(req, res, next) => {
    const token = req.headers.authrization;
    
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