import express, { Application } from "express";
import router from "./routes";
import { Defaults } from "./constants";
import sequelize from "./utils/datasource";

(async () => {
  const app: Application = express();

  app.use("/", express.static("./public", { dotfiles: "allow" }));

  app.use(router);

  //Init application server
  const httpPort = Defaults.PORT;
  app.listen(httpPort, () => {
    console.log(`server listening on ${httpPort}`);
  });

  // Init DB
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
  });
  
})();