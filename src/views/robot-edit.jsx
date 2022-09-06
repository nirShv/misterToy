import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { robotService } from '../services/robot.service'

export const RobotEdit = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    // const [robot, setRobot] = useState({
    //     model: '',
    //     type: ''
    // })xw
    const [robot, handleChange, setRobot] = useForm({
        model: '',
        type: ''
    })

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
        const robotId = params.id
        if (!robotId) return
        robotService.getById(robotId)
            .then(robot => {
                setRobot(robot)
            })
            .catch(err => {
                console.log('err:', err);
            })
    }, [])


    // const handleChange = ({ target }) => {
    //     const field = target.name
    //     const value = target.type === 'number' ? (+target.value || '') : target.value
    //     setRobot(prevRobot => ({ ...prevRobot, [field]: value }))
    // }
    

    const onSaveRobot = (ev) => {
        ev.preventDefault()
        robotService.save({ ...robot }).then(() => {
            navigate('/')
        })
    }


    return (
        <section className='robot-edit'>
            <h1>{robot._id ? 'Edit' : 'Add'} Robot</h1>
            <form onSubmit={onSaveRobot}>
                <label htmlFor="model">Model</label>
                <input ref={inputRef} value={robot.model} onChange={handleChange} type="text" name="model" id="model" />

                <label htmlFor="type">Type</label>
                <select value={robot.type} onChange={handleChange} name="type" id="type">
                    <option disabled value="">Choose a type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Office">Office</option>
                </select>

                <button>Save</button>
            </form>
        </section>
    )
}
