import knex from "knex";
import knexInstance from "../../config/KnexInstance";

const db = knex(knexInstance);

async function executeTransactionAsync<TResult>(func: () => Promise<TResult>): Promise<TResult> {
  const trx = await db.transaction();
  try {
    const result = await func();
    await trx.commit();
    return result;
  } catch (error) {
    await trx.rollback();
    throw error;
  }
}

export default executeTransactionAsync;
