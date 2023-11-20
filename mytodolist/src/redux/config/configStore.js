import {createStore, combineReducers} from "redux";
import SelectMembersComment  from "../modules/SelectMembersComment";
import  TodolistCRUD  from "../modules/TodolistCRUD";
import LocalMemberButton from "../modules/LocalMemberButton";


const rootReducer = combineReducers({
    SelectMembersComment:SelectMembersComment,
    TodolistCRUD:TodolistCRUD,
    LocalMemberButton:LocalMemberButton,
    });
const store = createStore(rootReducer);
export default store;