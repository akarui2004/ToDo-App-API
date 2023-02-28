import express from "express";
import { Defaults } from "./constants";
import { printRouterInTerminal } from "./log";
import router from "./routes";
import { SequelizeConnection } from "./utils/datasource";

(async () => {
  const app = express();

  app.use("/", express.static("./public", { dotfiles: "allow" }));

  app.use(router);
  printRouterInTerminal(app);

  await SequelizeConnection.connect();

  //Init application server
  const httpPort = Defaults.PORT;
  app.listen(httpPort, () => {
    console.log(`⚡️[server]: running at http://localhost:${httpPort}`);
  });
})();

process.on('SIGINT', () => {
  SequelizeConnection.close();
  process.exit();
});
