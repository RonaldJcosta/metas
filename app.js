const express = require('express')

const app = express()

app.get('/metas', async (req, res) => {
   return res.json({ nome: "Ronald"})
})

app.listen(8080, () => {
    console.log('Server is running')
})