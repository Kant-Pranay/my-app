import React from 'react'
import { Link } from 'react-router-dom'

function Nav({ prev, next }) {
    return (
        <div>
            {prev && <Link to={prev}>
                <button style={{ marginRight: 20 }}>Go Back</button>
            </Link>}
            {next && <Link to={next}>
                {next === '/home' ?
                    <button>Go Home</button> :
                    <button>Go Next</button>}
            </Link>}
        </div>
    )
}

export default Nav
