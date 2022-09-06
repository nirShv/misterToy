import { storageService } from './async-storage.service.js'

import { httpService } from "./http.service.js";

export const toyService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'toys'

const toy = {
    "_id": "t101",
    "name": "Talking Doll",
    "price": 123,
    "labels": ["Doll", "Battery Powered", "Baby"],
    "createdAt": 1631031801011,
    "inStock": true
}
const toy1 = {
    "_id": "t102",
    "name": "Pokemon",
    "price": 222,
    "labels": ["Outdoor", "Battery Powered"],
    "createdAt": 1631031801012,
    "inStock": true
}
const toy2 = {
    "_id": "t103",
    "name": "Remote-controlled car",
    "price": 123,
    "labels": ["On wheels", "Battery Powered", "Outdoor"],
    "createdAt": 1631031801013,
    "inStock": true
}

const gDefaultToys = [toy, toy1, toy2]
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

function query(filterBy = { name: '', maxPrice: Infinity, minPrice: 0 }) {
    console.log('filterBy', filterBy);
    return httpService.get('', filterBy).then(toys => {

        // if (!toys || !toys.length) {
        //     storageService.postMany(STORAGE_KEY, gDefaultToys)
        //     toys = gDefaultToys
        // }
        // if (filterBy) {
        //     console.log('filterBy', filterBy);
        //     var { name, minPrice, maxPrice, inStock, labels, date } = filterBy
        //     maxPrice = maxPrice || Infinity
        //     minPrice = minPrice || 0
        //     toys = toys.filter(toy => toy.name.toLowerCase().includes(name.toLowerCase())
        //         && (toy.price < maxPrice)
        //         && toy.price > minPrice)
        // }


        return toys
    })
}

function getById(toyId) {
    return httpService.get(`/${toyId}`).then(toys => {
        return toys
    })
}

function remove(toyId) {
    return httpService.delete(`/${toyId}`)
}

function save(toy) {
    if (toy._id) {
        return httpService.put('', toy)
    } else {
        // toy.inStock = true
        // toy.createdAt = new Date().getTime()
        return httpService.post('', toy)
    }
}


