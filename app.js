const express = require('express')
const mongoose = require('mongoose')

require('./models/Metas')

const Meta = mongoose.model('Meta')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/metas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.get('/metas', async (req, res) => {

    await Meta.find().then((metas) => {
        return res.json({
            error: false,
            metas
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: 'Nenhum registro encontrado!'
        })
    })

   return res.json({ nome: "Ronald"})
})

app.post('/metas', async (req, res) => {

    await Meta.create(req.body, (error) => {
        if(error) return res.status(400).json({
            error: true,
            message: 'Erro: Não foi possível cadastrar a meta'
        })
    })

    return res.json({
        error: false,
        message: 'Meta cadastrada com sucesso!'
    })

})

app.listen(8080, () => {
    console.log('Server is running')
})