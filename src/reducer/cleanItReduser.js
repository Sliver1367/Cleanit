import {bookNowReducer} from "./bookNowReducer.js";
import {combineReducers} from "redux";
import {cleanTypeReducer} from "./cleanTypeReducer.js";

export const rootReducer = combineReducers(
    {
        bookNow: bookNowReducer,
        cleanType: cleanTypeReducer
    }
)