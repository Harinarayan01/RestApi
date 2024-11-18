const express=require('express');

const aap=express();
const users=require('./MOCK_DATA.json')



const PORT=8000;

// Rotes
aap.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${
    users.map(user=>`<li>${user.first_name}</li>`)
    }
    </ul>
    `
    return res.send(html); 
})


// RESTAPI

aap.get('/api/users',(req,res)=>{
    console.log("server 1");
    
    return res.json(users)
})

// Dyanmic id search
aap.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);

    return res.json(user); 
})

// PST API
aap.post('api/users',(req,res)=>{
    return res.json({status:"pending"});
})

// PATCH API
aap.patch('api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
})


// DELETE API
aap.delete('api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
})




aap.listen(PORT,()=>{
    console.log(`server started at PORT:${PORT}`);
    
})