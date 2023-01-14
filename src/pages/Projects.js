import { useState, useEffect } from "react";
import './Projects.css'

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    
		//make api call and get response
    const response = await fetch("https://portfolio-barezi.herokuapp.com/projects");
    
		// turn response into javascript object
    const data = await response.json();
    
		// set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
},[]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
        <div id="project-container">
          <div className="preview">
            <img src={project.placeholder}alt={projects.name} id='image'/>
          </div>
          <div className="details">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        </div>
    ));
  };

  return (
    <div className="main-project-container">
      {projects ? loaded() : <h1>Loading...</h1>};
    </div>
  )
}

export default Projects;