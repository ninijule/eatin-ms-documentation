import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerDocument from "./openapi";

const router = express.Router();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Eatin API Express with Swagger",
      version: "0.1.0",
      description:
        "This is an API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Eatin",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://20.74.97.140:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

router.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
