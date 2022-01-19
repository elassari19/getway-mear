import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./marketCoin/reducer";
import themeReducer from "./theme/reducer";


const rootReducer = combineReducers({
  theme: themeReducer,
  Markets: reducer
})


const store = createStore(rootReducer,{},applyMiddleware(thunk))

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch