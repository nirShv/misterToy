import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'

export const ToyDetails = (props) => {

    const [toy, setToy] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.id])

    const loadToy = () => {
        const toyId = params.id
        toyService.getById(toyId).then(toy => {
            setToy(toy)
        })
    }

    const onBack = () => {
        navigate('/')
    }
    
    if (!toy) return <div>Loading...</div>
    return (
        <div className='toy-details'>
            <section>
                <h3>{toy.name}</h3>
            </section>
            <section>
                <h3>{toy.inStock? 'Available in Stock':'Not in Stock'}</h3>
            </section>
  
            <img src={require(`../assets/imgs/${toy.name}.jpg`)} alt="toy" />
            <section>
                <h3>Price: {toy.price}</h3>
            </section>
            <button onClick={onBack}>Back</button>
            {/* <Link to={`/toy/${(+toy._id)+1}`} >Next toy</Link> */}
        </div>
    )
}


 
