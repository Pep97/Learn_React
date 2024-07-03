import { Componen, Component} from 'react';
import './card-list.styles.css';

class CardList extends Component {
    render () {

        const {monsters} = this.props;
        return <div className='card-list'> 
            {monsters.map((monster) => {

                const {name, email,id} = monster;
                return(
                <div className='card-container' key={id}>
                <img alt={`monster${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>)

                // <h1 key={monster.id}>{monster.name}</h1>
            })}
            </div>

        // in a component you can't have a starting siblings, you have to write inside the initial div or you will get an error
    }
}

export default CardList;