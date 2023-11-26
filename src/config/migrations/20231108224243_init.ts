import { Knex } from "knex";
const { v4: uuidv4 } = require("uuid");

enum role {
  admin,
  customer,
}

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists("car_brand", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("car_type", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("car_transmission", (table: Knex.TableBuilder) => {
        table.string("id", 255).notNullable().primary();
        table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("car", (table: Knex.TableBuilder) => {
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
      table.foreign("car_transmission_id").references("id").inTable("car_transmission")
    })
    .createTableIfNotExists("account", (table: Knex.TableBuilder) => {
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
    .createTableIfNotExists("trans", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("user_id");
    })
    .createTableIfNotExists("trans_detail", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("trans_id", 255);
      table.string("car_id", 255);
      table.integer("long_day");
      table.decimal("total_price", 14, 2);
      table.foreign("trans_id").references("id").inTable("trans");
      table.foreign("car_id").references("id").inTable("car");
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists("trans_detail")
    .dropTableIfExists("trans")
    .dropTableIfExists("car_brand")
    .dropTableIfExists("car")
    .dropTableIfExists("account")
    .dropTableIfExists("car_type");
}
