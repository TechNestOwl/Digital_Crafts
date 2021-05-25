import React from 'react'

export default function Jokes(props) {
    return (
        <div>
            <h1>Jokes</h1>
            <p>{props.joke}</p>
        </div>
    )
}

