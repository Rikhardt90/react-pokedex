import "../../styles/Characters.scss"

export default function Gallery({ characters }) {
  return (
    <div className="characters">
      {characters.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
