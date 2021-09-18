import { reducer } from "./reducers"
// em actions tem as ações relacionadas ao estado

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
}

export {
    initialState,
    reducer
}