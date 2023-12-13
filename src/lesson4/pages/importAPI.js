import axios from "axios";

const url = "https://countriesnow.space/api/v0.1/countries";

export const getAllCountries = async () => {
  const resp = await axios.get(`${url}/info?returns=unicodeFlag`);
  return resp.data.data;
};

export const getDataCountry = async () => {
  const resp = await axios.get(`${url}`);
  console.log(resp);
  return resp;
};

//https://documenter.getpostman.com/view/1134062/T1LJjU52#intro
