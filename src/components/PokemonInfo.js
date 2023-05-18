import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';
// чотирі стана 1-idle- простий(стоїть на місті). 2-pending чекає.
// 3 - resolved виконався .4 - rejecte відхилено
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


// приймає один проп імя покемона
export default class PokemonInfo extends Component {
  // зберігаємо інфу про покемона
  state = {
    pokemon: null,
    error: null,
    // додамо статус де початковий стан IDLE
    status: Status.IDLE,
  };
  //  коли в мене компонент оновлюється componentDidUpdate
  //  (коли міняються пропси або стейт)
  componentDidUpdate(prevProps, prevState) {
    // попередній
    const prevName = prevProps.pokemonName;
    // наступний або поточний
    const nextName = this.props.pokemonName;
    // Якщо попередній і наступний недорівнюють
    if (prevName !== nextName) {
      // console.log('змінився покемон');
      // console.log('prevProps.pokemonName: ', prevProps.pokemonName);
      // console.log('this.props.pokemonName: ', this.props.pokemonName);
      // перед загрузкою ставимо статус PENDING загружаю
      this.setState({ status: Status.PENDING });
      // тут робимо феч запрос на нового покемона nextName
      setTimeout(() => {
        pokemonAPI
          .fetchPokemon(nextName)
          // прокидаємо нового покемона істатус в нас RESOLVED загрузився
          .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
          // відловлюємо помилки і прокидуємо в стейт і статус REJECTED
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 3000);
    }
  }

  render() {
    // із стейта витягуємо ключі
    const { pokemon, error, status } = this.state;
    // з пропса витягуємо покемон нейм з пропсу
    const { pokemonName } = this.props;
    // якщо статус idle то розмітка така
    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }
    // якщо статус pending тобіш іде загрузка. показуемо спінер
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    // якщо статус відхилено виводить меседж
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }
    // якщо все добре повертаємо розмітку покемона
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
