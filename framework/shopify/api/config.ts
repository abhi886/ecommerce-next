import { fetchApi } from "@framework/utils";
import { ApiConfig } from "../../common/types/api";
class Config {
  private config: ApiConfig;
  constructor(config: any) {
    this.config = config;
  }
  getConfig(): ApiConfig {
    return this.config;
  }
}

// Instance of config
const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchApi,
});
export function getConfig() {
  return configWrapper.getConfig();
}
