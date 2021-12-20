import { IComment, IPost } from "interfaces";

export type TComments = {
    list: IComment[],
    loading: boolean,
}

export type TPost = {
    item: IPost,
    loading: boolean,
}
