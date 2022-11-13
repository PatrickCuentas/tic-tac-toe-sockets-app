import PropTypes from "prop-types";
import { IconContext } from "react-icons";

const Icon = ({ icon, fontSize, color }: any) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color } }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  fontSize: "20px",
  color: "black",
};

export default Icon;
