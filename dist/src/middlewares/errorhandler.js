"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequestException_1 = require("../exceptions/BadRequestException");
const NotFoundException_1 = require("../exceptions/NotFoundException");
function errorhandler(err, _req, res, _next) {
    if (err instanceof NotFoundException_1.NotFoundException) {
        res.status(404).json({ message: err.message });
    }
    else if (err instanceof BadRequestException_1.BadRequestException) {
        res.status(400).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: err.message });
    }
}
exports.default = errorhandler;
