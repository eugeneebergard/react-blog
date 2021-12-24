import ApiRequest from './Request'
import { IPost } from '../interfaces'

export default class PostsApi {
  static async loadList(limit: number): Promise<IPost[]> {
    let url: string = `posts`

    if (limit) url = `posts?_limit=${limit}`

    return await ApiRequest.get(url)
  }

  static async loadItem(id: string): Promise<IPost> {
    return await ApiRequest.get(`posts/${id}`)
  }
}
