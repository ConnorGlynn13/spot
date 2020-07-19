import express from 'express'
import nunjucks from 'nunjucks'

const app = express()
const PORT = process.env.PORT || '3000'

nunjucks.configure('./public/views', {
    autoescape: true,
    express: app
})

app.get('/', (request, response) => {
    return response.render('index.njk', getServices())
})

const getServices = () => {
    return {
        services: [
            {
                name: 'prisonstaffhub',
                home: 'https://sign-in-dev.hmpps.service.justice.gov.uk/auth/login',
                repository: 'https://github.com/ministryofjustice/prisonstaffhub',
                deploymentPipeline: '',
                image: 'https://hub.docker.com/r/mojdigitalstudio/prisonstaffhub',
                documentation: '',
            },
            {
                name: 'something else',
                home: '',
                repository: '',
                deploymentPipeline: '',
                image: '',
                documentation: '',
            },
        ]
    }
}

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

export default app