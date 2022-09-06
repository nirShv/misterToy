import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { robotService } from '../services/robot.service'

export const RobotDetails = (props) => {

    const [robot, setRobot] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadRobot()
    }, [params.id])



    // componentDidUpdate(prevProps, prevState) {
    //     if (prevparams.id !== params.id) {
    //         loadRobot()
    //     }
    // }


    const loadRobot = () => {
        const robotId = params.id
        robotService.getById(robotId).then(robot => {
            setRobot(robot)
        })
    }

    const onBack = () => {
        navigate('/')
    }


    console.log('render');
    
    if (!robot) return <div>Loading...</div>
    return (
        <div className='robot-details'>
            <section>
                <h3>Model: {robot.model}</h3>
            </section>
            <section>
                <h3>Type: {robot.type}</h3>
            </section>
            <section>
                <h3>Battery Status: {robot.batteryStatus}</h3>
            </section>
            <img src={`https://robohash.org/${robot._id}`} alt="" />
            <button onClick={onBack}>Back</button>
            <Link to='/robot/r1' >Next Robot</Link>
        </div>
    )
}
