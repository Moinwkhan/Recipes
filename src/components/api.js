import axios from "axios";
import { api_url } from "./constant";

const getrecipes = async (searchedQuery) => {
  try {
    let response = await axios.get(`${api_url}/search?q=${searchedQuery}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export default getrecipes;
