import { BAY_CAKE } from "./action";

const initalState = {
    numberOFCakes: 10,
    numberOfIcecream: 15,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case BAY_CAKE:
            return {
                ...state,
                numberOFCakes: state - 1
            };
    }
}