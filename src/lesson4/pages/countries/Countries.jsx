import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { countriesList } from "../importAPI";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  //const [queryFilter, setQueryFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const location = useLocation();

  const handleOnChange = (event) => {
    const filter = event.target.value;
    setSearchParams({ query: filter });
  };

  useEffect(() => {
    // simulation
    setTimeout(() => {
      countriesList(query).then((filteredCountries) =>
        setCountries(filteredCountries)
      );
    }, "300");
  }, [query]);

  const list = countries.map((data) => (
    <li key={uuidv4()}>
      {data.unicodeFlag}
      <Link to={`${data.name}`} state={{ from: location }}>
        {" "}
        {data.name}
      </Link>
    </li>
  ));

  return (
    <main>
      <h3>Find your country</h3>
      <input value={query} onChange={handleOnChange} />
      <ul>{list}</ul>
    </main>
  );
};

export default Countries;
