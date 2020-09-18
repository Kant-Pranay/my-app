import React from 'react'
import { createStore } from '../Stores/Store'
import { useLocalStore } from 'mobx-react'


const Context = React.createContext(null)

export const Provider = ({ children }) => {
    const Store = useLocalStore(createStore)

    return <Context.Provider value={Store}>
        {children}
    </Context.Provider>
}

export const useStore = () => React.useContext(Context)