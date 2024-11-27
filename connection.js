
const mongoose=require('mongoose');
async function connectionMondodb(url){
    return mongoose.connect(url);
}

module.exports={
    connectionMondodb
}