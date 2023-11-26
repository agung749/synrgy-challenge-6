"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const CarRoute_1 = __importDefault(require("./app/Cars/CarRoute"));
const errorhandler_1 = __importDefault(require("./middlewares/errorhandler"));
const _404_1 = __importDefault(require("./exceptions/404"));
const KnexInstance_1 = __importDefault(require("./config/KnexInstance"));
const CarBrandRoute_1 = __importDefault(require("./app/CarBrands/CarBrandRoute"));
const CarTypeRoute_1 = __importDefault(require("./app/CarTypes/CarTypeRoute"));
const CarTransmissionRoute_1 = __importDefault(require("./app/CarTransamissions/CarTransmissionRoute"));
const uploadService = require("./helpers/UploadService");
const upload = require("./middlewares/upload");
const app = (0, express_1.default)();
const port = process.env.PORT;
const newKnex = (0, knex_1.default)(KnexInstance_1.default);
objection_1.Model.knex(newKnex);
app.use(express_1.default.json());
// ########################### Routing ###################################
app.use("/api/v1", CarRoute_1.default);
app.use("/api/v1", CarBrandRoute_1.default);
app.use("/api/v1", CarTypeRoute_1.default);
app.use("/api/v1", CarTransmissionRoute_1.default);
app.post("/api/v1/photo/upload", upload.single("picture"), uploadService);
// ========================================================================
// ################## Handle Error ###################
app.use(_404_1.default);
app.use(errorhandler_1.default);
// ==================================================
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
