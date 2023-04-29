const redux = require('redux'); // video numper #6
const createStore = redux.createStore // video numper #6

const combineReducers = redux.combineReducers // video numper #9

{
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
}

// // // first step 
// const initalState = {
//     numberOFCakes: 10,
//     numberOfIceCream: 15,
// }

// // // first step
// const reducer = (state = initalState, action) => {
//     switch (action.type) {
//         case "BAY_CAKE":
//             return {
//                 ...state,
//                 numberOFCakes: state.numberOFCakes - 1
//             };
//         case "BAY_ICE_CREAM":
//             return {
//                 ...state,
//                 numberOfIceCream: state.numberOfIceCream - 1
//             };
//         default:
//             return state
//     }
// }

// // // first step
// const store = createStore(reducer)
// console.log("init state", store.getState())
// const unSubscribe = store.subscribe(() => console.log(`update State`, store.getState()))
// store.dispatch(bayCake())
// store.dispatch(bayCake())
// store.dispatch(bayCake())
// store.dispatch(bayIceCream())
// unSubscribe()

// ###################################################################

{
    const initalCakesState = {
        numberOFCakes: 10,
    }
    const initalIceCreamState = {
        numberOfIceCream: 15,
    }
}

{
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
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    IceCream: IceCreamReducer
})

const store = createStore(rootReducers)

console.log("init state", store.getState())
const unSubscribe = store.subscribe(() => console.log(`update State`, store.getState()))

// ! return new value
store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayIceCream())

// ! return old value
console.log(initalCakesState.numberOFCakes, initalIceCreamState.numberOfIceCream)

unSubscribe()

