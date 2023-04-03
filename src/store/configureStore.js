import {createStore} from "redux";
import {rootReducer} from "../reducer/cleanItReduser.js";


export const store = createStore(rootReducer)
