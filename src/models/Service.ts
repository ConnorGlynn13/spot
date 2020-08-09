import mongoose, { Schema } from 'mongoose'

interface ServiceSchema extends mongoose.Document {
    githubId: { type : String , unique : true, required : true },
    name: String,
    htmlUrl: String,
    defaultBranch: String,
}

const Service = mongoose.model<ServiceSchema>('GithubRepository', new Schema({
    githubId: { type : String , unique : true, required : true },
    name: String,
    htmlUrl: String,
    defaultBranch: String,
}))

const serviceFactory = (githubRepositoryResponse: any) => {
    return new Service({ 
        githubId: githubRepositoryResponse.id, 
        name: githubRepositoryResponse.name, 
        htmlUrl: githubRepositoryResponse.html_url, 
        defaultBranch: githubRepositoryResponse.default_branch 
    })
}

const createOrUpdateService = async (service: ServiceSchema) => {
    const mongoResponse = await Service.find({ githubId: service.githubId }).exec()
    if (mongoResponse.length > 0) {
        console.info(`updating service ${service.id}, ${service.name}`)
        Service.findByIdAndUpdate({ githubId: service.id }, service)
    } else {
        console.info(`creating service ${service.id}, ${service.name}`)
        Service.create(service,)
    }
}

export { 
    ServiceSchema,
    Service,
    serviceFactory,
    createOrUpdateService,
}