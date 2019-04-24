/*
//Exercicio 1
class User {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
        this.admin = false
    }

    isAdmin() {
        return this.admin === true
    }
}
class Admin extends User {
    constructor() {
        super()
        this.admin = true
    }
}
const User1 = new User('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')
console.log(User1.isAdmin())
console.log(Adm1.isAdmin())




//Exercicio 2
const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

const idadesMult = []

const map = users.map(function (idade, index) {  //index = posição
    return users[index].idade
})

const filter = users.filter(function (idade, index) {
    return users[index].idade >= 18
})
const find = users.find(function (empresa, index) {
    return users[index].empresa === "Google"
})

const filter2 = users.filter(function (idade, index) {
    users[index].idade *= 2
    return users[index].idade <= 50
})

console.log(map)
console.log(filter)
console.log(find)
console.log(filter2)


//Exercicio 3
// 3.1
const arr = [1, 2, 3, 4, 5]
arr.map(item => { return item + 10 })

// 3.2// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 }
const mostrarIdade = () => { console.log(usuario.idade) }
mostrarIdade()

// 3.3// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { return { nome, idade } }
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4   
const promise = () => {
    return Promise = (resolve, reject) => {
        return resolve()
    }
}
console.log(promise)
*/

//Exercicio 4 
// 4.1
/*
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}
const nome = () => {
    return empresa.nome
}
const cidade = () => {
    return empresa.endereco.cidade
}
const estado = () => {
    return empresa.endereco.estado
}
console.log(nome())
console.log(cidade())
console.log(estado())

//4.2
const usuario = {
    nome: 'Matheus',
    idade: 18,
    empresa: 'Plusoft'
}
const mostraInfo = ({ nome, idade }) => {
    return `${nome} tem ${idade} anos.`
}
console.log(mostraInfo({ nome: 'Matheus', idade: 18 }))
*/

/*
//Exercicio 5
//5.1
const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr
console.log(x)
console.log(y)

const sum = arr.reduce(function (total, next) {
    return total + next
})
console.log(sum)

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Matheus' }
console.log(usuario2)

const usuario3 = { ...usuario, endereco:{...usuario.endereco, cidade: 'Lontras'}}
console.log(usuario3)
*/

//Exercicio 6
/*
const usuario = 'Diego';
const idade = 23;
console.log(`O usuario ${usuario} possui ${idade} anos`);
*/
/*
//Exercicio 7
const nome = 'Diego';
const idade = 23;
const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
}
console.log(usuario)
*/