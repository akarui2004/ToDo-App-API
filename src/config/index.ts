import { ERROR, NODE_ENV } from "src/constants"
import fs from "fs";
import Toml from "toml";

const loadConfig = () => {
  const configFile = `./config/${NODE_ENV}.toml`;

  if (!fs.existsSync(configFile))
    throw new Error(ERROR.File.TomlNotFound);

  const config = Toml.parse(fs.readFileSync(configFile, "utf8"));
  return config;
}

export const config = loadConfig();
