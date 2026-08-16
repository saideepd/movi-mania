import { useState } from "react";

const Card = ({ title, rating, isCool, actors }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
      {/* <p>Rating: {rating}</p>
      <p>{isCool ? "This movie is cool!" : "This movie is not cool."}</p>
      <ul>
        {actors && actors.map((actor, index) => (
          <li key={index}>{actor.name}</li>
        ))}
      </ul> */}
    </div>
  )
}
const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} actors={[ { name: "Mark Hamill" }, { name: "Harrison Ford" }]} />
      <Card title="Avatar" rating={4} isCool={true} actors={[ { name: "Sam Worthington" }, { name: "Zoe Saldana" }]} />
      <Card title="The Lion King" rating={5} isCool={true} actors={[ { name: "Matthew Broderick" }, { name: "Jeremy Irons" }]} />
    </div>
  )
}

export default App
