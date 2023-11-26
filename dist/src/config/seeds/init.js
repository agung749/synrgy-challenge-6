"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        //   await knex("table_name").del();
        // Inserts seed entries
        yield knex("car_brand").insert([
            { id: "a084a9d2-0c01-4832-bfc1-39ded8b13769", name: "Toyota" },
            { id: "64588529-731f-4353-8720-17690f69996a", name: "Honda" },
            { id: "72e15674-521d-4dd1-a8ef-4e7773954e23", name: "Suzuki" }
        ]);
        yield knex("car_type").insert([
            { id: "8e3386be-633a-4a5b-89e0-21a4ec7ad642", name: "Sport Utility Vehicle (SUV)" },
            { id: "00c81856-23b9-4f9c-96ef-e43db00cf099", name: "Multi Purpose Vehicle (MPV)" },
            { id: "88cddf3e-024d-4b0e-a181-5b90196364eb", name: "Sedan" },
            { id: "a36863c8-00d5-4c32-bae3-4ef8b13292d1", name: "Wagon" },
            { id: "9a626f5a-a491-47b4-afd3-d92b73432374", name: "Hatchback" },
            { id: "c1c16f3c-aff9-4b1e-b8da-0cc4401cc5b8", name: "Coupe" },
            { id: "e1ecab2b-56b4-445e-b07f-2135028ae3cd", name: "City Car" },
            { id: "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75", name: "Convertible " },
            { id: "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08", name: "Crossover" },
            { id: "ff8d8f18-9f79-4a28-8514-813f0698c805", name: "Microcar" },
            { id: "2d450a45-aa2d-4ba6-91f3-b9a88879e912", name: "Pikap" }
        ]);
        yield knex("car_transmission").insert([
            { id: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc", name: "Manual" },
            { id: "c4d51740-8250-4d71-803c-c0b7f39bfe25", name: "Automatic" },
            { id: "ec69c821-aa1a-4fbf-9b2d-da6af948bab5", name: "Transmisi Dual Clutch (DCT)" }
        ]);
        yield knex("car").insert([
            {
                id: "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
                name: "Toyota Alphard",
                price: 1000000,
                year: 2023,
                size: "Large",
                capacity: 8,
                description: "Large and elegant car",
                picture_url: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
                car_brand_id: "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                car_type_id: "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                car_transmission_id: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc"
            },
            {
                id: "64588529-731f-4353-8720-17690f69996a",
                name: "Honda Brio",
                price: 250000,
                year: 2020,
                size: "Small",
                capacity: 5,
                description: "small car",
                picture_url: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
                car_brand_id: "64588529-731f-4353-8720-17690f69996a",
                car_type_id: "ff8d8f18-9f79-4a28-8514-813f0698c805",
                car_transmission_id: "c4d51740-8250-4d71-803c-c0b7f39bfe25"
            },
            {
                id: "72e15674-521d-4dd1-a8ef-4e7773954e23",
                name: "Suzuki Ertiga",
                price: 350000,
                year: 2022,
                size: "Medium",
                capacity: 5,
                description: "Medium car",
                picture_url: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
                car_brand_id: "72e15674-521d-4dd1-a8ef-4e7773954e23",
                car_type_id: "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                car_transmission_id: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc"
            },
        ]);
    });
}
exports.seed = seed;
