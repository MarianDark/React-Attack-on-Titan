
import PropTypes from "prop-types"; // Importar PropTypes

const PersonajesCard = ({ data }) => {
  return (
    <>
      <tr className="char-table-row">
        <td>{data.name}</td>
        <td>{data.faction}</td>
        <td>{data.profession}</td>
        <td>{data.race}</td>
      </tr>
    </>
  );
};

// Definir PropTypes para validar las propiedades
PersonajesCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    faction: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired
  }).isRequired
};

export default PersonajesCard;
