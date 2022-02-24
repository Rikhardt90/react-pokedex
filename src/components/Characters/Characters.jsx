import "../../styles/Characters.scss";

export default function Gallery({ characters }) {
  return (
    <div className="characters">
      {characters.map((item) => (
        <div className="character-card" key={item.id}>
          
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />

          <p>{item.gender}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}
