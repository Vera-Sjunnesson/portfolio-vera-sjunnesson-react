import React from 'react'
import { ProjectCard } from 'components/lib/ProjectCard'
import { Fade } from 'react-awesome-reveal';
import { ProjectSection, ProjectHeading, ProjectsWrapper } from './UXProjectsStyles'

export const UXProjects = ({ uxprojectsRef }) => {
  return (
    <ProjectSection ref={uxprojectsRef}>
      <Fade
        duration={2000}>
        <ProjectHeading>
          UX Design Projects
        </ProjectHeading>
      </Fade>
      <ProjectsWrapper>
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/tangoportalen.png`}
          imgAlt="Tangoportalen"
          projectTitle="Tangoportalen"
          projectDescription="The UX design process for a tango platform with the goal to design for community and inspire individuals to engage more actively in the world of dance!"
          listItems={[
            { key: 22, text: 'Empathize & Define' },
            { key: 23, text: 'UX Research' },
            { key: 24, text: 'Ideate' },
            { key: 25, text: 'Prototype' },
            { key: 26, text: 'UI Design' },
            { key: 27, text: 'Test & iterate' },
            { key: 28, text: 'Accessibility' }
          ]}
          githubLink="https://www.figma.com/file/AL8DxQY6ajtpxncsa57yPA/Vera-Sjunnesson---Tangoportalen?type=whiteboard&node-id=0-1&t=R6xOotqEPmDK1F9e-0"
          liveLink="https://www.figma.com/proto/pmCzzpqjweBd6Aw3eFmXTW/Vera-final-project-sketches?page-id=0%3A1&type=design&node-id=15-31679&viewport=15541%2C-2398%2C0.5&t=tcSiJ4zQBwOSHfdh-1&scaling=scale-down&starting-point-node-id=15%3A31679"
          isUx />
      </ProjectsWrapper>
    </ProjectSection>
  )
}
