import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'


const ProjectCard = (props) => {
  return (
    <div className='card'>
        <Link to={`/details/${props.title}`} key={props.title}>
            <div><img src={props.image} alt={props.alt} className='card-image'></img></div>
        </Link>
    </div>
  )
}

export default ProjectCard