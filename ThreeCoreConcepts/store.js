const redux = require('redux'); // video numper #6
const createStore = redux.createStore // video numper #6

function bayCake() {
    return {
        type: "BAY_CAKE",
        info: "first redux action",
    };
}

const initalState = {
    numberOFCakes: 10,
}


const reducer = (state = initalState, action) => {
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

// video numper #6
const store = createStore(reducer)
console.log("init state", store.getState())
const unSubscribe = store.subscribe(() => console.log(`update State`, store.getState()))

store.dispatch(bayCake())
store.dispatch(bayCake())
store.dispatch(bayCake())

unSubscribe()

