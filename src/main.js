//                                    Aula Classes
/*class List{
    constructor(){
        this.data = []
    }
    
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}
class TodoList extends List{
    constructor(){
        super()
        this.usuario = 'Matheus'
    }
    mostraUsuario(){
        console.log(this.usuario)
    }
}
const minhaLista = new TodoList()
document.getElementById('novotodo').onclick = function() {
    minhaLista.add('Novo todo')
}
minhaLista.mostraUsuario()
class Matematica{
    static soma(a,b){    //static só serve para retornar um valor
        return a+b
    }
}
console.log(Matematica.soma(2,2))
*/






//                                        Aula const&let
/*const user = {nome: 'Matheus'}
user.nome = 'Joao'
console.log(user)
function teste(x){
    let y = 2
    if(x > 5){
        let y = 4
        console.log(x,y)
    }
}
teste(10)
*/



//                                       Operações em Array
/*
const arr = [1,2,3,4,5,6,7,8,9]
const newArr = arr.map(function(item, index){  //index = posição
    return index + item
})
const sum = arr.reduce(function(total, next){
    return total + next
})
const filter = arr.filter(function(item){
    return item%2 === 0
})
const find = arr.find(function(item){
    return item === 4
})
console.log(newArr)
console.log(sum)
console.log(filter)
console.log(find)
*/

//                                Aula Arrows Functions
/*
const arr = [1,2,3,4,5,6,7,8,9]
const newArr = new arr.map(item =>{
    return item*2
})
const newArr2 = new arr.map(item => item*2)
const teste = () => {return 'teste'}   //chama uma função, mas não é recomendado dessa forma
const obj = () => ({nome: 'matheus'})  //maneira para retornar um obj
console.log(newArr)
console.log(newArr2)
console.log(teste())
console.log(obj())
*/



//                               Aula de Valores Padrão
/*
const soma = (a = 3, b = 6) => a+b
console.log(soma(1)) //retorna 7
console.log(soma())  //retorna 9
*/


//                               Aula Desestruturação
/*
const usuario = {
    nome: 'matheus',
    idade: 18,
    endereco:{
        rua: 'Essa mesmo',
        estado: 'SP'
    }
}
function mostrar({nome, idade, endereco:{estado}}){
    console.log(nome, idade, estado)
}
mostrar(usuario)
*/


//                             Aula de REST e SPREAD
/*
//REST
const usuario = {
    nome: 'matheus',
    idade: 18,
    empresa: 'Plusoft'
}
const {nome, ...resto} = usuario
console.log(nome)
console.log(resto)
const arr = [1,2,3,4,5]
const [a,b, ...c] = arr
console.log(a)
console.log(b)
console.log(c)
function soma(...params){
    return params.reduce((total, next) => total+next)
}
console.log(soma(1,2,3))
//SPREAD
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
const usuario1 = {
    nome:'matheus',
    idade: 18,
    empresa: 'Plusoft'
}
const usuario2 = { ...usuario1, nome:'joao'}
console.log(usuario2)
*/





//                                   Aula Template Literals
/*
const nome = 'matheus'
const idade = 18
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
*/




//                                  Aula Object Short Syntax
/*
const nome = 'matheus'
const idade = 18
const user = {
    nome,
    idade,
    empresa: 'Plusoft'
}
console.log(user)
*/




//                                                      Aula Webpack

//import { soma } from './funcoes'                      *maneira simples de se importar uma função
//import somaFunction from './soma'                     *nome da função pode ser alterado sem problema ao ser criado um export default em outro arquivo
//import { sub } from './funcoes'      
//import soma, {sub} from './funcoes'                   *pode se importar tanto de um export default ou de um export normal 
//import {soma as somaFunction, sub} from './funcoes'   *altera nome da função

/*
import * as funcoes from './funcoes'  //chama todas as funções
console.log(funcoes)
console.log(funcoes.soma(2,3))
console.log(funcoes.sub(5,3))
console.log(funcoes.mult(3,3))
*/






/*
//                                                     Aula Async Awiat
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK") }, 2000)
})
/*
minhaPromise().then(response => {
    console.log(response)
})
.catch(err => {

})
*/
/*
async function executaPromise() {   
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()

const executaPromise = async() => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()
*/


/*
//                                                       Aula de Axios com Async/Await
import axios from 'axios'
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err) { 
            console.warn("Erro na API")            
        }
    }
}
Api.getUserInfo('kielkow')
Api.getUserInfo('kielkowfbvrgfbwqgr')
*/






//                                                      APLICAÇAO
import api from './api'

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById("repo-form")
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById("repo-list")

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    async addRepository(event){
        event.preventDefault()

        const repoInput = this.inputEl.value

        if(repoInput.length === 0){
            return
        }

        const response = await api.get(`/repos/${repoInput}`)

        const { name, description, html_url, owner:{ avatar_url}} = response.data

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        })

        this.inputEl.value = ''

        this.render()
    }

    render(){
        this.listEl.innerHTML = ''

        this.repositories.forEach(repo => {    //igual ao map() mas nao retorna nada
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))
            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()   //const meuApp = new App()