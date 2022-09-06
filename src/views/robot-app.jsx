import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RobotFilter } from '../cmps/robot-filter'
import { RobotList } from '../cmps/robot-list'
import { loadRobots, removeRobot, setFilterBy } from '../store/actions/robot.action'
import { spendBalance } from '../store/actions/user.action'

export const RobotApp = (props) => {
    
    const { robots, isLoading } = useSelector(state => state.robotModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRobots())
    }, [])

    // componentDidMount() {
    //     props.loadRobots()
    // }


    const onRemoveRobot = (robotId) => {
        dispatch(removeRobot(robotId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadRobots())
    }


    // const { robots } = props
    if (!robots) return <div>Loading...</div>
    return (
        <div className='robot-app'>
            <RobotFilter onChangeFilter={onChangeFilter} />
            <Link to="/robot/edit">Add Robot</Link>
            <RobotList history={props.history} onRemoveRobot={onRemoveRobot} robots={robots} />
        </div>
    )
}


// const mapStateToProps = state => {

//     return {
//         robots: state.robotModule.robots
//     }
// }

// const mapDispatchToProps = {
//     loadRobots,
//     removeRobot,
//     setFilterBy,
//     spendBalance
// }

// export const RobotApp = connect(mapStateToProps, mapDispatchToProps)(_RobotApp)
