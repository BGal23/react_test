import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { getAllCountries } from "../importAPI";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const countriesList = async () => {
    try {
      const getCountries = await getAllCountries();
      setCountries([...getCountries]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    countriesList();
  }, []);

  const list = countries.map((data) => (
    <li key={uuidv4()}>
      {data.unicodeFlag}
      <Link to={`${data.name}`}> {data.name}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default Countries;
