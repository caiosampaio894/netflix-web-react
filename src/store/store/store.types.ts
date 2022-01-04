import { UserState } from "../user/user.types"

export type Action<k> = {
    type: string,
    payload: k
}


export type State = {
    user: UserState
}