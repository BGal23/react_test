import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataCountry } from "../importAPI";

const Country = () => {
  const { country } = useParams();

  //   const countryData = async () => {
  //     try {
  //       const getData = await getDataCountry();
  //       //setCountries([...getCountries]);

  //       console.log(getData);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  useEffect(() => {
    //countryData();
    getDataCountry();
  }, []);

  return <div>{country}</div>;
};

export default Country;
