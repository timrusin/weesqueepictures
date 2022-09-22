import React from 'react'
import { Link } from 'react-router-dom'
import './MiniCard.css'

const MiniCard = (props) => {
const Top = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
}

  return (
    <Link to={`/details/${props.title}`} key={props.title} onClick={Top}>
        <img src ={props.image} alt= {props.alt} className='mini-card-image'></img>
    </Link>
  )
}

export default MiniCard