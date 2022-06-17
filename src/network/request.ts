import Axios from "axios";
export function request(config: Object) {
  const instance = Axios.create({
    baseURL: "http://114.115.241.254",
    timeout: 5000,
  });
  return instance(config);
}
