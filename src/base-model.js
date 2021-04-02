import objection from 'objection'
import NotFoundError from './NotFoundError'

class BaseModel extends objection.Model {
  static columnNameMappers = objection.snakeCaseMappers()

  static useLimitInFirst = true

  static createNotFoundError(_, message) {
    return new NotFoundError(message)
  }

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext)

    const date = new Date().toISOString()

    this.created_at = date
    this.updated_at = date
  }

  async $beforeUpdate(options, queryContext) {
    await super.$beforeUpdate(options, queryContext)

    this.updated_at = new Date().toISOString()
  }
}

export default BaseModel
