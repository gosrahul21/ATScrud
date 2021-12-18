const URI= 'mongodb+srv://gosrahul21:rahul%40321@dcorner.b3k0e.mongodb.net/atsassignment?retryWrites=true&w=majority'


require('mongoose').connect(URI,{

    useNewUrlParser:true,

    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})


