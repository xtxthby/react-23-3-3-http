// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import PokemonForm from './components/PokemonForm';
// import PokemonInfo from './components/PokemonInfo';

// export default class App extends Component {

//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }


// ===========================================================
//  робимо запрос

// import { Component } from 'react';
// // import { ToastContainer } from 'react-toastify';
// // import PokemonForm from './components/PokemonForm';
// // import PokemonInfo from './components/PokemonInfo';

// export default class App extends Component {
//   // тут зберігаємо покемони, початкове nullале ми не побачимо
//   // розмітки так як нам треба тру або фолс, тоді як додати в стейт
//   state = {
//     // pokemon: 'null',
//   pokemon: {},
//   };
//   // робимо запрос і отримуємо обєкт розпарсивши
//   // асінхронки поки не робимо
//   componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(console.log);
//   }


//   // handleFormSubmit = pokemonName => {
//   //   this.setState({ pokemonName });
//   // };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {/* якщо в мене є покемон то рендиремо розмітку */}
//         {this.state.pokemon && <div>Тут буде покемон після fetch і тоді в  state запишемо</div>}
//         {/* <PokemonForm onSubmit={this.handleFormSubmit} /> */}
//         {/* <PokemonInfo pokemonName={this.state.pokemonName} /> */}
//         {/* <ToastContainer autoClose={3000} /> */}
//       </div>
//     );
//   }
// }


// ================================== 


// додавання в стейт

// import { Component } from 'react';
// // import { ToastContainer } from 'react-toastify';
// // import PokemonForm from './components/PokemonForm';
// // import PokemonInfo from './components/PokemonInfo';

// export default class App extends Component {
//   // тут зберігаємо покемони, початкове nullале ми не побачимо
//   // розмітки так як нам треба тру або фолс, тоді як додати в стейт
//   // додаємо через сетстейт нижче
//   state = {
//     pokemon: 'null',
//   // pokemon: {},
//   };
//   // робимо запрос і отримуємо обєкт розпарсивши
//   // асінхронки поки не робимо
//   componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       // додаємо в стейт
//       .then(pokemon => this.setState({pokemon}));
//   }


//   // handleFormSubmit = pokemonName => {
//   //   this.setState({ pokemonName });
//   // };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {/* якщо в мене є покемон то рендиремо розмітку */}
//         {this.state.pokemon && <div>Тут буде покемон після fetch і тоді в  state запишемо</div>}
//         {/* <PokemonForm onSubmit={this.handleFormSubmit} /> */}
//         {/* <PokemonInfo pokemonName={this.state.pokemonName} /> */}
//         {/* <ToastContainer autoClose={3000} /> */}
//       </div>
//     );
//   }
// }



// ======================================== 

// зарендеримо імя покемона i loading

// import { Component } from 'react';
// // import { ToastContainer } from 'react-toastify';
// // import PokemonForm from './components/PokemonForm';
// // import PokemonInfo from './components/PokemonInfo';

// export default class App extends Component {
//   // тут зберігаємо покемони, початкове nullале ми не побачимо
//   // розмітки так як нам треба тру або фолс, тоді як додати в стейт
//   // додаємо через сетстейт нижче
//   state = {
//     pokemon: 'null',
//   // pokemon: {},
//     loading: false,
//   };
//   // робимо запрос і отримуємо обєкт розпарсивши
//   // асінхронки поки не робимо
//   componentDidMount() {
//       // починаю завантажувати(це для  h1 дивись нижче)
//     this.setState({ loading: true });
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       // додаємо в стейт
//       .then(pokemon => this.setState({ pokemon }))
//       // тут після загрузки прибераємо h1
//       .finally(() => this.setState({loading: false}));
//   }


//   // handleFormSubmit = pokemonName => {
//   //   this.setState({ pokemonName });
//   // };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading && <h1>Завантажуємо</h1>}
//         {/* якщо в мене є покемон то рендиремо розмітку  і імя покемона*/}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//         {/* <PokemonForm onSubmit={this.handleFormSubmit} /> */}
//         {/* <PokemonInfo pokemonName={this.state.pokemonName} /> */}
//         {/* <ToastContainer autoClose={3000} /> */}
//       </div>
//     );
//   }
// }



// =============================================
//  тепер робимо більш правильно 



import { Component } from 'react';
// це глобальний тостконтейнер для виводу на єкран попереження
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
  // тут так само локально зберігаємо покемона
  state = {
    pokemonName: '',
  };


  // сюди із форми буде приходити назва покемона при 
  // .натисканні на сабмит(баттон) і прокидаємо в стейт
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* рендеримо покемона форму  передаємо пропс onSubmit з методом */}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        {/* інформація про покемона приймає один проп покемона*/}
        <PokemonInfo pokemonName={this.state.pokemonName} />
        {/* закриється через три секунди */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}