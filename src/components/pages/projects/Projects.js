import React from 'react'
import { ProjectCard } from 'components/lib/ProjectCard'

export const Projects = () => {
  return (
    <div>
      <ProjectCard
        imgSource={`${process.env.PUBLIC_URL}/images/todo-app.png`}
        imgAlt="To do app"
        projectTitle="The To Do App"
        projectDescription="An organizational to do-app built in React using Redux. The user can add, delete, prioritize and check off tasks and categorize them in projects."
        listItem="React"
        githubLink="https://github.com/Technigo/project-todos/pull/445"
        liveLink="https://to-do-project-vera.netlify.app/" />
      <ProjectCard
        imgSource={`${process.env.PUBLIC_URL}/images/todo-app.png`}
        imgAlt="To do app"
        projectTitle="The To Do App"
        projectDescription="An organizational to do-app built in React using Redux. The user can add, delete, prioritize and check off tasks and categorize them in projects."
        listItem="React"
        githubLink="https://github.com/Technigo/project-todos/pull/445"
        liveLink="https://to-do-project-vera.netlify.app/" />
    </div>
  )
}
