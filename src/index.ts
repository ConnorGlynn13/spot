import express from 'express'
import nunjucks from 'nunjucks'
import mongoose, { Schema } from 'mongoose'
import { Service } from './models/Service'
import { harvestGithubUserRepositories } from './harvesters'

const app = express()
const PORT = process.env.PORT || '3000'
const dbUrl = 'mongodb://127.0.0.1:27017/spot-harvesters-github-dev'
mongoose.connect(dbUrl, { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection

nunjucks.configure('./public/views', {
    autoescape: true,
    express: app
})

app.get('/', async (request, response) => {
    const services = await Service.find()
    response.render('index.njk', {services})
})

harvestGithubUserRepositories('ConnorGlynn13', 1, 10)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

export default app