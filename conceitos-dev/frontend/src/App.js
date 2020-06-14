import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";
//import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);
    const response = await api.post("projects", {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Gabriel Martins",
    });

    const project = response.data;

    setProjects([...projects, project]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}
