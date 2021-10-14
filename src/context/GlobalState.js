import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
const initialState = {
    transactions : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)


    const Deletetransaction = (id) =>{
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id 
        })
    }
    const Addetransaction = (transaction) =>{
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction 
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            Deletetransaction,
            Addetransaction
            }}>
                { children }
        </GlobalContext.Provider>
    );
}

