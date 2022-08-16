import React, { createContext, useContext, useReducer } from "react"

//preparing the data layer
export const stateContext = createContext();

//initial state is what that data layer looks like when the app is loaded
//the reducer listens to changes from the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider
        value={useReducer(reducer, initialState)}    
    >
        {children} 
    </stateContext.Provider>
)
//Hook which allows us to pull information from the data layer 
export const useStateValue = () => useContext(stateContext)