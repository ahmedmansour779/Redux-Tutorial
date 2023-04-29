const redux = require('redux'); // video numper #6
const createStore = redux.createStore // video numper #6
import { BAY_CAKE, bayCake } from "./action";

export const initalState = {
    numberOFCakes: 10,
    numberOfIcecream: 15,
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case BAY_CAKE:
            return {
                numberOFCakes: state.numberOFCakes - 1,
            };
        default:
            return state
    }
}

// video numper #6
const store = createStore(reducer)
console.log("init state", store.getState())
const unSubscribe = store.subscribe(() => console.log("update State", store.getState()))
store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayCake())
unSubscribe()