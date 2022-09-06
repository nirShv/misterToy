import { ToyPreview } from './toy-preview'

export function ToyList({ toys, onRemove }) {

    return (
        <div className='toy-list simple-cards-grid'>
            {toys.map(toy => <ToyPreview key={toy._id} toy={toy} onRemove={onRemove} />)}

        </div>
    )
}
