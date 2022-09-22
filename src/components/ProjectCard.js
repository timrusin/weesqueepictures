import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'


const ProjectCard = (props) => {
  const Top = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
}
  return (
    <div className='card'>
        <Link to={`/details/${props.title}`} key={props.title} onClick={Top}>
            <div><img src={props.image} alt={props.alt} className='card-image'></img></div>
        </Link>
    </div>
  )
}

export default ProjectCard