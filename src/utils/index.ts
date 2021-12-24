function errorHandler(error: any, req: string): void {
  if (error.response) console.error(`${req} Ошибка: ${error.response.status}.`)
  else if (error.request) console.error(`${req} Ошибка: Запрос был отправлен, но ответа не последовало.`)
  else console.error(`${req} Ошибка: Неизвестная ошибка.`)
}

export default errorHandler
