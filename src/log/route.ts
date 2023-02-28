import express from "express";
import listEndpoints from "express-list-endpoints";

interface RouterEndpoint {
  path: string,
  methods: string[],
  middlewares: string[],
}

const printRouterInTerminal = (app: express.Express) => {
  const routerList: Array<RouterEndpoint> = listEndpoints(app);

  const routerStr = routerList.map((route: RouterEndpoint) => route.methods + '   ' + route.path).join("\n");
  console.log("\n*** TODO App API Route List ***\n");
  console.log(routerStr);
  console.log("\n*** TODO App API Route List ***\n");
};

export default printRouterInTerminal;
