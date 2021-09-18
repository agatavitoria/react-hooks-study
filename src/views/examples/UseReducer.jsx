import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, numberMulti7, numberDiv25, numberInt, numberAddN, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.user ? state.user.name : 'Sem Usuário'}</span>
                <span className="text">{state.number}</span>
                <button className="btn" onClick={() => login(dispatch, 'João') }>Login</button>
                <button className="btn" onClick={() => numberAdd2(dispatch) }>+2</button>
                <button className="btn" onClick={() => numberMulti7(dispatch) }>*7</button>
                <button className="btn" onClick={() => numberDiv25(dispatch) }>/25</button>
                <button className="btn" onClick={() => numberInt(dispatch) }>Int</button>
                <button className="btn" onClick={() => numberAddN(dispatch, -10) }>-10</button>
            </div>
        </div>
    )
}

export default UseReducer
