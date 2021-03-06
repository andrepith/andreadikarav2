import axios from "axios";
import staticData from "../StaticData";

declare const process: {
  env: {
    API_URL: string;
  };
};

const bioApi = async () => {
  try {
    const res = await axios.get(process.env.API_URL);
    return staticData;
    // return res.data;
  } catch (error) {
    return staticData;
  }
};

export default bioApi;
