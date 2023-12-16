import axios from "axios";

const url = "https://countriesnow.space/api/v0.1/countries";

const getAllCountries = async () => {
  const resp = await axios.get(`${url}/info?returns=unicodeFlag`);
  return resp.data.data;
};

export const countriesList = async (query) => {
  try {
    const getCountries = await getAllCountries();
    const filtered = await getCountries.filter((data) =>
      data.name.includes(query)
    );
    return filtered;
  } catch (error) {
    console.log("error", error);
  }
};

//https://documenter.getpostman.com/view/1134062/T1LJjU52#intro
