import { storageService } from './async-storage.service.js'

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

const gDefaultToys = [toy,toy1,toy2]
const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

function query(/*filterBy*/) {
    return storageService.query(STORAGE_KEY).then(toys => {

        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gDefaultToys)
            toys = gDefaultToys
        }
        // if (filterBy) {
        //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
        //     maxBatteryStatus = maxBatteryStatus || Infinity
        //     minBatteryStatus = minBatteryStatus || 0
        //     robots = robots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
        //         && (robot.batteryStatus < maxBatteryStatus)
        //         && robot.batteryStatus > minBatteryStatus)
        // }

        return toys
    })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.inStock= true 
        toy.createdAt=new Date().getTime()
        return storageService.post(STORAGE_KEY, toy)
    }
}


