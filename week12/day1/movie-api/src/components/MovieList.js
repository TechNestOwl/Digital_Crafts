import React from 'react'
import '../App.css'


export default function MovieList(props) {
    return (
        <div>
            {props.movies.map((movie, index)=> (
            <div className="d-flex jsutif-content-start m-3">
                <img src={movie.Poster} alt="Movie Poster"></img>
                </div>
            ))};
        </div>
    )
}
