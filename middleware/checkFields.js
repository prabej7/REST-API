function checkField(req,res,next){
    const length = Object.keys(req.body).length
    if (length>0){
        next();
    }else{
        res.send("Some of the fields are empty.")
    }
    
};

module.exports = checkField;