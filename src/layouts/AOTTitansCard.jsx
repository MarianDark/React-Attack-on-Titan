
import PropTypes from "prop-types"; // Importar PropTypes

function AOTTitansCard({ titan }) {
  return (
    <div className="titan-card">
      <h4>{titan.name}</h4>
      <img src={titan.img} alt={titan.name} />
      <p>Abilities: {titan.abilities}</p>
      <p>Height: {titan.height}</p>
      <p>Allegiance: {titan.allegiance}</p>
    </div>
  );
}

// Definir PropTypes para validar las propiedades
AOTTitansCard.propTypes = {
  titan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    abilities: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    allegiance: PropTypes.string.isRequired
  }).isRequired
};

export default AOTTitansCard;
