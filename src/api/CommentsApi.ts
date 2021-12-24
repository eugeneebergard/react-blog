import ApiRequest from './Request'
import { IComment } from '../interfaces'

export default class CommentsApi {
  static async loadList(id: string): Promise<IComment[]> {
    return await ApiRequest.get(`posts/${id}/comments`)
  }
}
