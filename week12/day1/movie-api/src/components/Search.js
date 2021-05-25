import React from 'react'
import '../App.css'

export default function Search(props) {
    return (
        <div className="col col-sm-4">
            <input 
            className="form-control" 
            placeholder="Search Movies..."
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
};
