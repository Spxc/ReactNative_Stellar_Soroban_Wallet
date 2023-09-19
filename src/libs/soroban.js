const SorobanClient = require('soroban-client')

const server = new SorobanClient.Server('https://horizon-futurenet.stellar.org')

const getAccount = (account) => {
    return new Promise((resolve, reject) => {
        server.getAccount(account).then((data) => { 
            resolve(data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

module.exports = {
    getAccount
}