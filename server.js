const express = require('express')

const app = express()

app.get('/mutant/', (req, res)=>{
  res.send('Hello world with Express')
})

// app.listen(3000)
// console.log('Server running on port 3000 :>> ');