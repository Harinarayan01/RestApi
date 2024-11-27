const User=require('../models/user')

async function handleAlluser(req,res){
    const allDBUsers= await User.find({});
    return res.json(allDBUsers);
}
async function getUserById(req,res){
    try {
        console.log('Request received for user:', req.params.id);

        // Fetch the user from the database
        const user = await User.findById(req.params.id);

        if (!user) {
            // Handle case where the user is not found
            return res.status(404).json({ error: 'User not found' });
        }

        // Respond with the user data
        return res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handlegetandUpdate(req,res){
    await User.findByIdAndUpdate(req.params.id,{last_name:"singh"})
    return res.json({status:"sucessfuly changed"});


}
async function handlegetanddelte(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"sucessfuly Deleted"});
    

}


const handleAddoneId = async (req, res) => {
    const body = req.body;
  
    if (
      !body ||
      !body.first_name?.trim() ||
      !body.last_name?.trim() ||
      !body.email?.trim() ||
      !body.gender?.trim() ||
      !body.job_title?.trim()
    ) {
      return res.status(400).json({ msg: "All fields are required." });
    }
  
    try {
      const newUser = await User.create({
        first_name: body.first_name.trim(),
        last_name: body.last_name.trim(),
        email: body.email.trim(),
        gender: body.gender.trim(),
        job_title: body.job_title.trim(),
      });
      return res.status(201).json({ msg: "Successfully added", id: newUser._id });
    } catch (error) {
      return res.status(500).json({ msg: "Failed to create user", error: error.message });
    }
  };
  







module.exports={
    handleAlluser,getUserById,handlegetandUpdate,handlegetanddelte,handleAddoneId
}