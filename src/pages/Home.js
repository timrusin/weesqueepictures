import React from 'react'
import './Home.css'
import Projects from '../data/projectData'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
const featured = []

Projects.map(item => {
  return item.image && featured.push(item)
})
  return (
    <div className='home-container'>
      <h1>Featured Films and Works</h1>
    
      <div className='project-cards-container'>
        {featured.map(item => {
          return <ProjectCard key={item.id}
          {...item}
          />
        })}
      </div>
    </div>
  )
}

export default Home