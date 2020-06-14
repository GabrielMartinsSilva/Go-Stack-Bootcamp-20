import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "front-end web",
  ]);

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={100} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}
