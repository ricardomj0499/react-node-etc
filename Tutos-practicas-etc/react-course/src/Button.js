import PropTypes from "prop-types";

export function Button({ text, name }) {
  if (!text) {
    console.error("Valor requerido");
  }
  return (
    <button>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "user2",
};
