"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequestException_1 = require("../exceptions/BadRequestException");
const cloudinary = require("cloudinary").v2;
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
cloudinary.config({
    cloud_name: cryptr.decrypt(process.env.CLOUD_NAME_ENC),
    api_key: cryptr.decrypt(process.env.CLOUD_KEY_ENC),
    api_secret: cryptr.decrypt(process.env.CLOUD_SECRET_ENC),
    secure: true,
});
const uploadService = (req, res) => {
    var _a;
    const body = req.file;
    if (!body)
        throw new BadRequestException_1.BadRequestException("File photo belum diupload!");
    const fileBase64 = body.buffer.toString("base64");
    const file = `data:${(_a = req.file) === null || _a === void 0 ? void 0 : _a.mimetype};base64,${fileBase64}`;
    cloudinary.uploader.upload(file, (err, result) => {
        if (!!err) {
            return res.status(400).json({
                message: err.message,
            });
        }
        res.status(201).json({
            message: "Upload success",
            url: result.url,
        });
    });
};
module.exports = uploadService;
