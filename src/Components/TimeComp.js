import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { useStore } from '../Contexts/Context'
import Nav from './Nav'

function TimeComp() {
    const Store = useStore()
    useEffect(() => {
        const interval = setInterval(
            () => Store.tick(),
            1000
        )
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return useObserver(() => (
        <div className="time-stamp-box">
            <p>{Store.time}</p>
            <Nav prev='/home' next='/data' />
        </div>
    ))
}

export default TimeComp