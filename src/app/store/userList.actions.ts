import { createAction, props } from "@ngrx/store";
import { User } from "../services/user-list.service";



export const addUser = createAction('[userList] AddUser', props<User>());

export const removeUser = createAction('[userList] RemveUser',props<{userName:string}>());
