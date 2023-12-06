import axios from "axios";

const base = "https://hn.algolia.com/api/v1";
const getAllItems = async (query) => {
  const url = `${base}/search?query=${query}`;
  const resp = await axios.get(url);
  return resp.data.hits;
};

export default getAllItems;
