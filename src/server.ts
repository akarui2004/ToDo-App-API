import express, { Application } from "express";
import router from "./routes";
import { Defaults } from "./constants";

(async () => {
  const app: Application = express();

  app.use("/", express.static("./public", { dotfiles: "allow" }));

  app.use(router);

  //Init application server
  const httpPort = Defaults.PORT;
  app.listen(httpPort, () => {
    console.log(`server listening on ${httpPort}`);
  });
})();