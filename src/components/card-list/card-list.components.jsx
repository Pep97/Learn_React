import { Componen, Component} from 'react';

class CardList extends Component {
    render () {

        const {monsters} = this.props;
        return <div> 
            {monsters.map((monster) => (
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
            </div>

        // in a component you can't have a starting siblings, you have to write inside the initial div or you will get an error
    }
}

export default CardList;