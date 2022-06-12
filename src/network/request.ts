import Axios from "axios";
export function request(config: Object) {
  const instance = Axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000,
  });
  return instance(config);
}
