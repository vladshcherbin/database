import knex from 'knex'
import logger from 'knex-query-logger'
import { Model } from 'objection'

export default function connectDatabase() {
  const knexConnection = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
  })

  Model.knex(knexConnection)

  if (process.env.NODE_ENV === 'development') {
    logger(knexConnection)
  }
}
