import knex from 'knex'
import logger from 'knex-query-logger'
import { Model } from 'objection'

export default function connectDatabase(knexfile) {
  const environment = process.env.NODE_ENV || 'development'
  const knexConnection = knex(knexfile[environment])

  Model.knex(knexConnection)

  if (environment === 'development') {
    logger(knexConnection)
  }
}
