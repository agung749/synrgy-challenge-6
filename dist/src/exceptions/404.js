"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFound(_req, res, _next) {
    res.status(404).json({
        status: 'Not Found',
        message: "Resource Not Found"
    });
}
exports.default = notFound;
