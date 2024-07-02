import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { user } from "./reduser/user";
import { product } from "./reduser/product";

let combain=combineReducers({
    user:user,
    product:product
})
export const store=legacy_createStore(combain,applyMiddleware(thunk))