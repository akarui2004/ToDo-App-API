import express, { Application } from "express";
import router from "./routes";
import { Defaults } from "./constants";
import { SequelizeConnection } from "./utils/datasource";
// import sequelize from "./utils/datasource";

(async () => {
  const app: Application = express();

  app.use("/", express.static("./public", { dotfiles: "allow" }));

  app.use(router);

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
