import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Projects from '../data/projectData'
import './Details.css'

console.log(Projects);

const Details = () => {
    const [film, setFilm] = useState ({
        alt: '' ,
        description: '',
        embedURL: '',
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
    <div className="details-page-container">
      <h1 className='details-title'>{film.title}</h1>
      <div className="detail-visuals">
        <img src={film.image} alt={film.alt} className="detail-image"></img>
        <iframe
          className='youtube-embed'
          // width="560"
          // height="315"
          src={film.embedURL}
          title={film.title}
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p className="detail-description">{film.description}</p>
    </div>
  );
}

export default Details