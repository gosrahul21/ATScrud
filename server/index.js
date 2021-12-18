const express = require('express');
require('./models');
const app = express();
const PORT = process.env.PORT|| 8000;
app.use(require('cors')());
app.use(express.json());
app.use('/employee',require('./router/employee'))





app.listen(PORT,(err)=>{
    console.log(`App is listening on port ${PORT}`)
})