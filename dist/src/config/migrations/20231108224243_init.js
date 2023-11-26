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
exports.down = exports.up = void 0;
const { v4: uuidv4 } = require("uuid");
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["customer"] = 1] = "customer";
})(role || (role = {}));
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .createTableIfNotExists("car_brand", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("name", 255).notNullable();
        })
            .createTableIfNotExists("car_type", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("name", 255).notNullable();
        })
            .createTableIfNotExists("car_transmission", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("name", 255).notNullable();
        })
            .createTableIfNotExists("car", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("name", 255).notNullable();
            table.decimal("price", 14, 2).notNullable();
            table.integer("year");
            table.string("size", 255).notNullable();
            table.boolean("availability").defaultTo(true);
            table.integer("capacity").notNullable();
            table.text("description");
            table.text("picture_url");
            table.timestamp("available_at", { useTz: true }).defaultTo(knex.fn.now());
            table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
            table.boolean("is_deleted").defaultTo(false);
            table.string("car_brand_id", 255);
            table.string("car_type_id", 255);
            table.string("car_transmission_id");
            table.foreign("car_brand_id").references("id").inTable("car_brand");
            table.foreign("car_type_id").references("id").inTable("car_type");
            table.foreign("car_transmission_id").references("id").inTable("car_transmission");
        })
            .createTableIfNotExists("account", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("fullName", 255).notNullable();
            table.text("address").notNullable();
            table.string("phone", 255).notNullable();
            table.string("username", 255).unique().notNullable();
            table.string("email", 255).unique().notNullable();
            table.string("password", 255).notNullable();
            table.text("picture_url");
            table.enum("role", [role.admin, role.customer]).defaultTo(role.customer);
        })
            .createTableIfNotExists("trans", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("user_id");
        })
            .createTableIfNotExists("trans_detail", (table) => {
            table.string("id", 255).notNullable().primary();
            table.string("trans_id", 255);
            table.string("car_id", 255);
            table.integer("long_day");
            table.decimal("total_price", 14, 2);
            table.foreign("trans_id").references("id").inTable("trans");
            table.foreign("car_id").references("id").inTable("car");
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema
            .dropTableIfExists("trans_detail")
            .dropTableIfExists("trans")
            .dropTableIfExists("car_brand")
            .dropTableIfExists("car")
            .dropTableIfExists("account")
            .dropTableIfExists("car_type");
    });
}
exports.down = down;
