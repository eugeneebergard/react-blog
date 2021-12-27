import axios from 'axios'
import errorHandler from '../utils/index'

export default class ApiRequest {
  private static baseURL: string = 'https://jsonplaceholder.typicode.com/'

  static async get(url: string): Promise<any> {
    try {
      const response = await axios.get(this.baseURL + url)
      return response.data
    } catch (error: unknown) {
      errorHandler(error, `Запрос: ${url}.`)
    }
    return {}
  }
}
