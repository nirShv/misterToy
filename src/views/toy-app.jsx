import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RobotFilter } from '../cmps/robot-filter'
import { ToyList } from '../cmps/toy-list'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action'
// import { spendBalance } from '../store/actions/user.action'

export const ToyApp = (props) => {

    const { toys, isLoading } = useSelector(state => state.toyModule)
    console.log('toys', toys);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemove = (toyId) => {
        dispatch(removeToy(toyId))
    }

    // const onChangeFilter = (filterBy) => {
    //     dispatch(setFilterBy(filterBy))
    //     dispatch(loadToys())
    // }

    if (!toys) return <div>Loading...</div>
    return (
        <div className='toy-app'>
            <h1>Toy App</h1>
            {/* <RobotFilter onChangeFilter={onChangeFilter} />*/}
            <Link to="/toy/edit">Add Toy</Link>
            <ToyList onRemove={onRemove} toys={toys} />
        </div>
    )
}


