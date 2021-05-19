import knex from 'knex'
import logger from 'knex-query-logger'
import objection from 'objection'

export default function connectDatabase(knexConfig) {
  const knexConnection = knex(knexConfig)

  objection.Model.knex(knexConnection)

  if (process.env.NODE_ENV === 'development') {
    logger(knexConnection)
  }

  return knexConnection
}
