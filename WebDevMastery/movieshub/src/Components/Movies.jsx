import { useState } from 'react';
import {moviesData} from '../assets/data.js'
import './Movies.css'
function Movies(){
    const [eachMovie, setMovie] = useState(moviesData)

    const filterByCategory= (eachCategory)=>{
        setMovie(moviesData.filter((data)=>data.category == eachCategory))
    }

    return(
    <>
        <div className='menu-container'> 
            <button type="button" className="btn-menu btn btn-primary" onClick={()=>setMovie(moviesData)}>All</button>
            <button type="button" className="btn-menu btn btn-secondary" onClick={()=>filterByCategory('Action')}>Action</button>
            <button type="button" className="btn-menu btn btn-success" onClick={() => filterByCategory("Thriller")}>Thriller</button>
            <button type="button" className="btn-menu btn btn-danger" onClick={() => filterByCategory("Animation")}>Animation</button>
            <button type="button" className="btn-menu btn btn-warning" onClick={() => filterByCategory("Horror")}>Horror</button>
            <button type="button" className="btn-menu btn btn-info" onClick={() => filterByCategory("Sci-Fi")}>Sci-Fi</button>
            <button type="button" className="btn-menu btn btn-dark" onClick={() => filterByCategory("Drama")}>Drama</button>
        </div>





        <div className='sub-container'>
            {eachMovie.map((movie)=>(
            <div className='card'>
            <div key={movie.id} className='movie-item'>
            <img src={movie.poster_path} className='imgCollection' alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <h4>{movie.release_date}</h4>
            </div>
            </div>
            ))}
        </div>
    </>
    )
}

export default Movies;