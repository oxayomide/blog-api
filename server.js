const app = require('express')
const port = 8080

app.get('/', (res, req)=>{
    res.send('Hellor world')
})

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})