/*
//1
var i = 1
const delay = () => new Promise(resolve => setTimeout(resolve((i++) + 's'), 1000));

const umPorSegundo = async () => {
    console.log(await delay())
    console.log(await delay())
    console.log(await delay())
}

umPorSegundo();
*/


/*
//2
import axios from 'axios'
class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response.data)
        } catch (err) {
            console.warn("Usuário não existe")
        }
    }
}
Api.getUserInfo('kielkow')
Api.getUserInfo('kielkowfbvrgfbwqgr')
*/


/*
//3
import axios from 'axios'
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch (err) {
            console.warn("Repositório não existe")
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br')
Github.getRepositories('rocketseat/dslkvmskv')
*/


/*
//4
import axios from 'axios'                                                               
const buscaUsuario = usuario => {
    try {
        const response = axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    }
    catch (err) {
        console.log('Usuário não existe')
    }
}
buscaUsuario('kielkow');
*/