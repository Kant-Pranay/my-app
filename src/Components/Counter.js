import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { useStore } from '../Contexts/Context'
import Nav from './Nav'


function Counter() {
    const Store = useStore()
    useEffect(() => {
        Store.count = 0
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return useObserver(() => (
        <div className="count-box">
            <p>Counter: {Store.count}</p>
            <button className="increment"
                onClick={() => Store.increment()}>+</button>
            <button className="decrement"
                onClick={() => Store.decrement()}>-</button>
            <Nav next='/time' />
        </div>
    ))
}

export default Counter