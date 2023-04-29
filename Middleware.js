const redux = require('redux');

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const reduxLogger = require("redux-logger")
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger();

function bayCake() {
    return {
        type: "BAY_CAKE",
        info: "first redux action",
    };
}
function bayIceCream() {
    return {
        type: "BAY_ICE_CREAM",
        info: "second redux action",
    };
}

const initalCakesState = {
    numberOFCakes: 10,
}
const initalIceCreamState = {
    numberOfIceCream: 15,
}

const cakeReducer = (state = initalCakesState, action) => {
    switch (action.type) {
        case "BAY_CAKE":
            return {
                ...state,
                numberOFCakes: state.numberOFCakes - 1
            };
        default:
            return state
    }
}
const IceCreamReducer = (state = initalIceCreamState, action) => {
    switch (action.type) {
        case "BAY_ICE_CREAM":
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            };
        default:
            return state
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    IceCream: IceCreamReducer
})

const store = createStore(rootReducers, applyMiddleWare(logger))
console.log("init state", store.getState())
const unSubscribe = store.subscribe(() => { })
// ! return new value
store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayIceCream())
store.dispatch(bayIceCream())
// ! return old value
// console.log(initalCakesState.numberOFCakes, initalIceCreamState.numberOfIceCream)
unSubscribe()

