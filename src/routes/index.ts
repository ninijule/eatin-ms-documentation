import RouterConfig from "../types/utils/routerConfig";
import documentationRouter from "./documentation";

const documentation: RouterConfig = {
  router: documentationRouter,
  path: "/documentation",
};

export default [documentation];
