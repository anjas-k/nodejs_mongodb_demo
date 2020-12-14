const mongoose = require ("mongoose");
mongoose.connect (process.env.MONGO_URL||"mongodb+srv://anjas321:anjas@321@cluster.iqenu.mongodb.net/EmployeeDB",{useNewUrlParser:true
,useUnifiedTopology: true},(err)=>{
    if(err) throw err
        console.log("connected to database successfully");
   
})
require('./employee.model')