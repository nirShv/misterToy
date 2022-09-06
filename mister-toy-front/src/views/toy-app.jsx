import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToyFilter } from '../cmps/toy-filter'
import { ToyList } from '../cmps/toy-list'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action'

export const ToyApp = (props) => {

    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemove = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }

    if (!toys) return <div>Loading...</div>
    return (
        <div className='toy-app'>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <Link to="/toy/edit" className='nice-button'>Add Toy</Link>
            <ToyList onRemove={onRemove} toys={toys} />
        </div>
    )
}



