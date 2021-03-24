import knex from 'knex'
import logger from 'knex-query-logger'
import objection from 'objection'

export default function connectDatabase(knexfile) {
  const environment = process.env.NODE_ENV || 'development'
  const knexConnection = knex(knexfile[environment])

  objection.Model.knex(knexConnection)

  if (environment === 'development') {
    logger(knexConnection)
  }

  return knexConnection
}
