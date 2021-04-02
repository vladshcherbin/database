class NotFoundError extends Error {
  constructor(message, ...parameters) {
    super(message, ...parameters)

    this.name = 'NOT_FOUND_ERROR'
    this.message = message || 'Item doesn\'t exist'
    this.extensions = {
      code: 'NOT_FOUND_ERROR'
    }
  }
}

export default NotFoundError
