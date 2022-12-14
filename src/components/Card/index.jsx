import './styles.css'

export function Card(props) {
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <input type="number" />
        </div>
    )
}