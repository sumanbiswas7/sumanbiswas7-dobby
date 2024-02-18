var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  app: () => app,
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_serverless_http = __toESM(require("serverless-http"));
var import_express2 = __toESM(require("express"));
var import_body_parser = __toESM(require("body-parser"));
var import_cors = __toESM(require("cors"));
var import_utils = require("utils");

// src/routes/animal.route.ts
var import_express = require("express");

// src/controllers/animal.controller.ts
var import_types = require("types");
var ANIMALS = [
  { id: 1, name: "Dog", species: "Canine", habitat: "Domestic" },
  { id: 2, name: "Cat", species: "Feline", habitat: "Domestic" },
  { id: 3, name: "Elephant", species: "Elephantidae", habitat: "Wild" },
  { id: 4, name: "Lion", species: "Panthera leo", habitat: "Wild" },
  { id: 5, name: "Monkey", species: "Primate", habitat: "Forest" }
];
async function get_animals(_, res) {
  const response = new import_types.HttpResponse({});
  try {
    response.animals = ANIMALS;
    response.status = import_types.HTTP_STATUS.OK;
    return res.status(response.status).json(response);
  } catch (error) {
    response.isError = true;
    response.status = import_types.HTTP_STATUS.SERVICE_UNAVAILABLE;
    response.message = "Something went wrong";
    res.status(response.status).json(response);
  }
}

// src/routes/animal.route.ts
var route = (0, import_express.Router)();
route.get("/", get_animals);
var animal_route_default = route;

// src/server.ts
var app = (0, import_express2.default)();
app.use(import_body_parser.default.json());
app.use((0, import_cors.default)());
app.use("/animal", animal_route_default);
app.get("/", (req, res) => {
  res.json({
    AUTHOR: import_utils.AUTHOR,
    working: true,
    message: `Hello World okss`,
    secret: `SECRET: ${process.env.SECRET} \u{1F92B}`
  });
});
var handler = (0, import_serverless_http.default)(app);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app,
  handler
});
//# sourceMappingURL=server.js.map