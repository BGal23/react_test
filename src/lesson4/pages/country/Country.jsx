//import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
//import { getDataCountry } from "../importAPI";

const Country = () => {
  const { country } = useParams();

  const location = useLocation();
  const from = location.state?.from ?? "/countries";

  return (
    <main>
      <br />
      <Link to={from}>Go back!</Link>
      <h3>{country}</h3>
    </main>
  );
};

export default Country;
