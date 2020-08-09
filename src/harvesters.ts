import githubClientBuilder from './clients/githubClientBuilder'
import { serviceFactory, createOrUpdateService } from './models/Service'

const githubClient = githubClientBuilder()

const harvestGithubOrganisationRepositories = (orginisation: String, pageNumber: number, limitPerPage: number) => {
    harvestGithubRepositories(`orgs/${orginisation}`, pageNumber, limitPerPage)
}

const harvestGithubUserRepositories = (name: String, pageNumber: number, limitPerPage: number) => {
    harvestGithubRepositories(`users/${name}`, pageNumber, limitPerPage)
}

const harvestGithubRepositories = async (name: String, pageNumber: number, limitPerPage: number) => {
    const response = await githubClient.getGithubRepositories(name, pageNumber, limitPerPage)
    response.data.forEach(async (githubRepositoryResponse: any) => {
        const service = serviceFactory(githubRepositoryResponse)
        createOrUpdateService(service)
    });
}



export {
    harvestGithubOrganisationRepositories,
    harvestGithubUserRepositories,
}