export default {
  openapi: "3.0.1",
  info: {
    title: "Eatin API Documentation",
    description: "This is documentation of our API Eatin.",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "apiteam@swagger.io",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.0",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: "http://20.74.17.54:3000/",
    },
  ],
  tags: [
    {
      name: "Application",
      description: "Everything about Application",
    },
    {
      name: "Article",
      description: "Everything about article",
    },
    {
      name: "Category",
      description: "Everything about category",
    },
    {
      name: "Logs",
      description: "Everything about logs",
    },
    {
      name: "Menu",
      description: "Everything about menu",
    },
    {
      name: "Notification",
      description: "Everything about notification",
    },
    {
      name: "Order",
      description: "Everything about order",
    },
    {
      name: "Profile",
      description: "Everything about profile",
    },
    {
      name: "Restaurant",
      description: "Everything about restaurant",
    },
  ],
  paths: {
    "/api/application/": {
      post: {
        tags: ["Application"],
        summary: "Add new application",
        operationId: "createApplication",
        parameters: [
          {
            name: "name",
            description: "Name of the application",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "description",
            description: "Description of the application",
            required: false,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the application",
                  },
                  description: {
                    type: "string",
                    description: "Description status of the application",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "string",
            content: {},
          },
          "400": {
            description: "Invalid params sended",
            content: {},
          },
          "403": {
            description: "Forbidden not connected",
            content: {},
          },
        },
      },
    },
    "/api/application/{applicationId}": {
      get: {
        tags: ["Application"],
        summary: "Find application by ID",
        description: "Returns a single application",
        operationId: "getApplicationById",
        parameters: [
          {
            name: "applicationId",
            in: "path",
            description: "ID of application",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "profileId",
            in: "path",
            description: "ID of profile user",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  id: {
                    type: "string",
                    description: "id of the application",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                },
              },
            },
          },
          "400": {
            description: "Invalid ID supplied",
            content: {},
          },
          "404": {
            description: "Application not found",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      delete: {
        tags: ["Application"],
        summary: "Delete application by ID",
        description: "Delete application",
        operationId: "DeleteApplicationById",
        parameters: [
          {
            name: "applicationId",
            in: "path",
            description: "ID of application",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "profileId",
            in: "path",
            description: "ID of profile user",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  id: {
                    type: "string",
                    description: "id of the application",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                },
              },
            },
          },
          "400": {
            description: "Invalid ID supplied",
            content: {},
          },
          "404": {
            description: "Application not found",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      put: {
        tags: ["Application"],
        summary: "Update application by ID",
        description: "Update application",
        operationId: "UpdateApplicationById",
        parameters: [
          {
            name: "applicationId",
            in: "path",
            description: "ID of application",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "profileId",
            in: "path",
            description: "ID of profile user",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "Name of the application",
            in: "path",
            description: "Name of the application",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "Description of the application",
            in: "path",
            description: "Description of the application",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  id: {
                    type: "string",
                    description: "id of the application",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                },
              },
            },
          },
          "400": {
            description: "Invalid ID supplied",
            content: {},
          },
          "404": {
            description: "Application not found",
            content: {},
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
    },
  },
  components: {
    schemas: {
      Application: {
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          fullName: {
            type: "string",
          },
          quantity: {
            type: "integer",
            format: "int32",
          },
          shipDate: {
            type: "string",
            format: "date-time",
          },
          status: {
            type: "string",
            description: "Order Status",
            enum: ["placed", "approved", "delivered"],
          },
          complete: {
            type: "boolean",
            default: false,
          },
        },
        xml: {
          name: "Order",
        },
      },
      Article: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
        },
        xml: {
          name: "Category",
        },
      },
      Categories: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          username: {
            type: "string",
          },
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          userStatus: {
            type: "integer",
            description: "User Status",
            format: "int32",
          },
        },
        xml: {
          name: "User",
        },
      },
      logs: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
        },
        xml: {
          name: "Tag",
        },
      },
      Menu: {
        required: ["name", "photoUrls"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          category: {
            $ref: "#/components/schemas/Category",
          },
          name: {
            type: "string",
            example: "doggie",
          },
          photoUrls: {
            type: "array",
            xml: {
              name: "photoUrl",
              wrapped: true,
            },
            items: {
              type: "string",
            },
          },
          sdf: {
            type: "array",
            xml: {
              name: "tag",
              wrapped: true,
            },
            items: {
              $ref: "#/components/schemas/Tag",
            },
          },
          status: {
            type: "string",
            description: "pet status in the store",
            enum: ["available", "pending", "sold"],
          },
        },
        xml: {
          name: "Pet",
        },
      },
      Notification: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            format: "int32",
          },
          type: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
      Order: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            format: "int32",
          },
          type: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
      Profile: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            format: "int32",
          },
          type: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
      Restaurant: {
        type: "object",
        properties: {
          code: {
            type: "integer",
            format: "int32",
          },
          type: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      petstore_auth: {
        type: "oauth2",
        flows: {
          implicit: {
            authorizationUrl: "http://petstore.swagger.io/oauth/dialog",
            scopes: {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets",
            },
          },
        },
      },
      api_key: {
        type: "apiKey",
        name: "api_key",
        in: "header",
      },
    },
  },
};
