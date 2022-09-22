import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Projects from '../data/projectData'
import './Details.css'

console.log(Projects);

const Details = () => {
    const [film, setFilm] = useState ({
        alt: '' ,
        description: '',
        emberURL: '',
        id: '',
        image: '',
        title: ''
    })
    let { title } = useParams()
    
    useEffect(()=> {
    Projects.forEach((item) => {
     title === item.title && setFilm(item);
    });
},)

console.log(film);
  return (
    <div className='details-page-container'>
        <h1>{film.title}</h1>
        <img src={film.image} alt={film.alt}></img>
        <p>{film.description}</p>
    </div>
  )
}

export default Details