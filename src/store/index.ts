import { defineStore } from "pinia";
import { Namse } from "./store-name";

const store = defineStore(Namse.Home, {
  state: () => {
    return {
      count: 0,
      name: "coderlxl",
    };
  },
  getters: {},
  actions: {},
});

export default store;
