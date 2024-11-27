const express=require('express');
const router=express.Router();
const {handleAlluser,getUserById,handlegetanddelte,handlegetandUpdate,handleAddoneId}=require('../controllers/user');



    
    
    router
    .route("/")
    .get(handleAlluser)
    .post(handleAddoneId);

    router
    .route("/:id")
    .get(getUserById)
    .patch(handlegetandUpdate)
    .delete(handlegetanddelte);
    

    


module.exports=router;