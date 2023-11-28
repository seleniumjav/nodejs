const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const {logger}=require('./middleware/logEvents')
const PORT=process.nextTick.PORT || 3500

app.use('/subdir',require('./routes/subdir'))
app.use('/',require('./routes/root'))

app.use(logger)

app.use(cors())

app.use('/subdir',express.static(path.join(__dirname,'./public')))


app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(PORT, ()=>console.log(`server running on ${PORT
}`))