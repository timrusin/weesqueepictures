import React from 'react'
import './Home.css'
import Projects from '../data/projectData'
import ProjectCard from '../components/ProjectCard'

const Home = () => {

  return (
    <div className='home-container'>
      <h1 className='home-title'>Films and Works</h1>
    
      <div className='project-cards-container'>
        {Projects.map(item => {
          return <ProjectCard key={item.id}
          {...item}
          />
        })}
      </div>
    </div>
  )
}

export default Home