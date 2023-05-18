// import { Component } from 'react';
// import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';

// const styles = { form: { marginBottom: 20 } };

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       toast.error('Введите имя покемона.');
//       return;
//     }

//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.handleNameChange}
//         />
//         <button type="submit">
//           <ImSearch style={{ marginRight: 8 }} />
//           Найти
//         </button>
//       </form>
//     );
//   }
// }






// ================================================ 

// форма покемона
// це строка як приклад імпорту іконкі svg
// import { ReactComponent as MyIkon } from './.....';






import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// локальний тост контейнер , виїзжає напис з помилкою
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  // оновляємо при кожному вводі в інпут
  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };
  // сабміт я відловлюю на самій формі
  handleSubmit = event => {
    event.preventDefault();
      // .перевірка на пусту форму
    if (this.state.pokemonName.trim() === '') {
      // викликаємо тост контейнер
      toast.error('Введите имя покемона.');
      // ретерн для того щоб далі не виконувалася функція
      // і нижче також
      return;
    }
    // передаю в Арр назву покемона this.state.pokemonName яку
    // .написав в формі
    this.props.onSubmit(this.state.pokemonName);
    // після сабміту очищаємо
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          // коли вводимо в інпут handleNameChange оновлює покемона в стейті
          onChange={this.handleNameChange}
        />
        <button type="submit">
          {/* це іконка з бібліотеки */}
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}