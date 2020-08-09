
import axios from 'axios'

const githubClientFactory:any = () => {
    const getGithubRepositories = async (name: String, pageNumber: number, limitPerPage: number) => {
        const response = await axios.get(`https://api.github.com/${name}/repos?page=${pageNumber}&per_page=${limitPerPage}`)
        return response
    }

    return {
        getGithubRepositories,
    }
}

export default githubClientFactory