import { RobotPreview } from './robot-preview'

export function RobotList({ robots, onRemoveRobot, history }) {
    
    return (
        <div className='robot-list simple-cards-grid'>
            {robots.map(robot => <RobotPreview key={robot._id} robot={robot} onRemoveRobot={onRemoveRobot}  />)}
        </div>
    )
}
