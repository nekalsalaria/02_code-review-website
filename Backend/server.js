require('dotenv').config()
const app = require('./src/app')

app.listen(port,()=>{
    console.log("server is running")
})
