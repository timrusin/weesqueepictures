import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Projects from '../data/projectData'
import MiniCard from './MiniCard'
import './Details.css'


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
     title === item.title && setFilm(item)
    });
},)

  return (
    <div className="details-page-container">
      <h1 className='details-title'>{film.title}</h1>
      <h3 className='details-subtitle'>{film.subTitle}</h3>
      <div className="detail-visuals">
        <img src={film.image} alt={film.alt} className="detail-image"></img>
        <iframe
          className='youtube-embed'
          src={film.embedURL}
          title={film.title}
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p className="detail-description">{film.description}</p>
        <div className='thumb-container'>
          {Projects.map(item => {
            return item.title !== title && <MiniCard {...item} key={item.title} />
          })}
        </div>
    </div>
  );
}

export default Details