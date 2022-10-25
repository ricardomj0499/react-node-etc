import PropTypes from "prop-types";

export function Button({ text, name = "user2" }) {
  if (!text) {
    console.error("Valor requerido");
  }
  return (
    <button onClick={() => console.log("se ha usado el button")}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
