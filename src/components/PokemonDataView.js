// очікує обєкт pokemon з пропсами
export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  // розмітка покемона
  return (
    <div>
      <img
        // витягуємо картку покемона яка прийшла
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      />
      <h2>{name}</h2>
      <ul>
        {/* мепаємо stats і беремо name, base_stat*/}
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
