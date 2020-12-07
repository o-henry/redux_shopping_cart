import axios, { AxiosAdapter } from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const instance = axios.create({
  baseURL: "/",
  headers: { "Cache-Control": "no-cache" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter, {
    enabledByDefault: false
  })
});

export default instance;
