import React, { useState, useEffect } from "react";
import axios from "axios";
const SelectedProjects = ({ selectedCategory }) => {
  const [projects, setProjects] = useState([]);
  const apiURL = `http://localhost:6500/display/select-projects?selectedCategory=${selectedCategory}`;
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setProjects(response.data.projectsArr);
      })
      .catch((err)=>{
        console.log('err while fetch selected product:>> ', err);
      })
  }, [apiURL]);
  if(!projects){
    return (<div>loading.....</div>)
  }
  return (
    <>
      <div>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project.title}</li>
            ))}
          </ul>
      </div>
    </>
  );
};

export default SelectedProjects;
