import { robotService } from "../../services/robot.service"



export function loadRobots() {

    return (dispatch, getState) => {
        const { filterBy } = getState().robotModule
        robotService.query(filterBy)
            .then(robots => {
                dispatch({ type: 'SET_ROBOTS', robots })
            })
            .catch(err => {
                console.log('err:', err)
            })

    }
}



export function removeRobot(robotId) {
    return (dispatch, getState) => {
        robotService.remove(robotId)
            .then(() => {
                dispatch({ type: 'REMOVE_ROBOT', robotId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}