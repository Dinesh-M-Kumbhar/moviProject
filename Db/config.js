const mongoose = require ("mongoose");
mongoose.set("strictQuery",true)
mongoose.connect(`mongodb://localhost:27017/bookmyshow`,{
    useNewUrlparser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected succesfully")
}).catch((err)=>{
    console.log("connected not done",err)
})
