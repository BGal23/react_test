import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.array,
};
