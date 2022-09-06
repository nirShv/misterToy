const fs = require('fs')
var gToys = require('../data/toy.json')
// const PAGE_SIZE = 5
module.exports = {
    query,
    getById,
    save,
    remove
}


function query(filterBy = { txt: '' }) {

    const regex = new RegExp(filterBy.txt, 'i')
    var toys = gToys.filter(toy => regex.test(toy.name))

    // if (filterBy.userId) {
    //     toys = toys.filter(toy => filterBy.userId === toy.owner._id)
    // }

    // if (filterBy.pageIdx !== undefined) {
    //     const startIdx = filterBy.pageIdx * PAGE_SIZE
    //     toys = toys.slice(startIdx, startIdx + PAGE_SIZE)
    // }

    return Promise.resolve(toys)
}

function getById(toyId) {
    const toy = gToys.find(toy => toy._id === toyId)
    return Promise.resolve(toy)
}


function remove(toyId /*,loggedinUser*/) {
    const idx = gToys.findIndex(toy => toy._id === toyId)
    // if (!loggedinUser.isAdmin &&  gToys[idx].owner._id !== loggedinUser._id) {
    //     return Promise.reject('Not your toy')
    // }
    gToys.splice(idx, 1)

    return _saveToysToFile()
}

function save(toy /*,loggedinUser*/) {
    if (toy._id) {
        const toyToUpdate = gToys.find(currToy => currToy._id === toy._id)

        // if (!loggedinUser.isAdmin && toyToUpdate.owner._id !== loggedinUser._id ) {
        //     return Promise.reject('Not your toy')
        // }

        toyToUpdate.name = toy.name
        toyToUpdate.price = toy.price
    } else {
        toy._id = _makeId()
        toy.inStock = true
        toy.createdAt = new Date().getTime()
        gToys.push(toy)
    }
    return _saveToysToFile()
        .then(() => toy)

}


function _saveToysToFile() {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(gToys, null, 2)
        fs.writeFile('data/toy.json', data, (err) => {
            if (err) return reject('Cannot save to file')
            resolve()
        })
    })
}


function _makeId(length = 5) {
    var txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}