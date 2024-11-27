const fs=require('fs');

function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(filename, `\n${Date.now()}:${req.method}:${req.path}`, (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
                return next(err); // Pass the error to the next middleware for proper handling
            }
            next(); // Proceed if there's no error
        });
    }
}

module.exports={
    logReqRes
}