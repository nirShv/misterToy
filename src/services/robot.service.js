import { storageService } from './async-storage.service.js'

export const robotService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'robots'
const gDefaultRobots = [
    { _id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking' },
    { _id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning' },
    { _id: 'r1', model: 'Dominique Sote', batteryStatus: 100, type: 'Pleasure' },
    { _id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office' }
]

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(robots => {

        if (!robots || !robots.length) {
            storageService.postMany(STORAGE_KEY, gDefaultRobots)
            robots = gDefaultRobots
        }
        if (filterBy) {
            var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
            maxBatteryStatus = maxBatteryStatus || Infinity
            minBatteryStatus = minBatteryStatus || 0
            robots = robots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
                && (robot.batteryStatus < maxBatteryStatus)
                && robot.batteryStatus > minBatteryStatus)
        }

        return robots
    })
}

function getById(robotId) {
    return storageService.get(STORAGE_KEY, robotId)
}

function remove(robotId) {
    return storageService.remove(STORAGE_KEY, robotId)
}

function save(robot) {
    if (robot._id) {
        return storageService.put(STORAGE_KEY, robot)
    } else {
        robot.batteryStatus = 100
        return storageService.post(STORAGE_KEY, robot)
    }
}


