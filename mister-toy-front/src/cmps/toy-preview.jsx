import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onRemove }) {
    var checkImg
    if (!toy.labels) checkImg = false
    else checkImg = true

    return (
        <div className='toy-preview'>
            <Link to={`/toy/${toy._id}`} className='info'>
                <h2>{toy.name}</h2>
                {checkImg && <img src={require(`../assets/imgs/${toy.name}.jpg`)} alt="toy" />}
                {!checkImg && <img src={require(`../assets/imgs/default.jpg`)} alt="toy" />}
                <h4>Price: ${toy.price}</h4>
            </Link>
            <section className='actions'>
                <button onClick={() => onRemove(toy._id)}>Delete</button>
                <Link to={`/toy/edit/${toy._id}`} >Edit</Link>
            </section>
        </div>
    )
}
