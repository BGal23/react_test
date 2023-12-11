import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const data = {
  name: "John",
};

const UserContext = createContext(undefined);
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  const userData = { ...data, isLogged, setIsLogged };
  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
