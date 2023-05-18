function fetchPokemon(name) {
  // робимо запрос
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    // якщо на response тру ,все гаразд то повертаемо результат парса
    if (response.ok) {
      return response.json();
    }
    // ми повертаємо із fetch результат Promise.reject(реджектимо проміс)
    // щоб нижче його можна було зловити і кидаємо результат пової помилки
    // з нашим текстом
    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchPokemon,
};

export default api;

