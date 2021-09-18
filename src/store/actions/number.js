export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' })
}

export function numberMulti7(dispatch) {
    dispatch({ type: 'numberMulti7' })
}

export function numberDiv25(dispatch) {
    dispatch({ type: 'numberDiv25' })
}

export function numberInt(dispatch) {
    dispatch({ type: 'numberInt' })
}

export function numberAddN(dispatch, value) {
    dispatch({ type: 'numberAddN', payload: value })
}