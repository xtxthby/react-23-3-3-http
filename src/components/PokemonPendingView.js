import { ImSpinner } from 'react-icons/im';
import PokemonDataView from './PokemonDataView';
import pendingImage from './pending.png';
//  стилі спінера
const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};
// очікує покемона 
export default function PokemonPendingView({ pokemonName }) {
  // ця частина це ---- скелетон ----базовий елемент з рандомними значеннями
  //  PokemonDataView({ pokemon: { sprites, name, stats } }) очікує sprites, name, stats
  // PokemonPendingView ми показуємо під час загрузки і робимо його в ручну
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          // тут ставимо свою картинку
          front_default: pendingImage,
        },
      },
    },
    // робимо пустий масив щоб mep нічого не повернув
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        {/* ставимо спінер і за допомогою класу вона крутиться */}
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      {/* сюди передамо наш знак запитання поки очікуємо загрузку */}
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
