import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ProjectCard } from 'components/lib/ProjectCard'
import { LineBackground } from 'components/lib/LineBackground';
import { LineBackgroundBottom } from 'components/lib/LineBackgroundBottom';
import { Fade } from 'react-awesome-reveal';
import { ProjectSection, ProjectHeading, ProjectsWrapper } from './ProjectStyles'

export const Projects = ({ projectsRef }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <ProjectSection ref={projectsRef}>
      {isDesktop && (
        <>
          <LineBackgroundBottom />
          <LineBackground />
        </>
      )}
      <Fade
        duration={2000}>
        <ProjectHeading>
          Featured Projects
        </ProjectHeading>
      </Fade>
      <ProjectsWrapper>
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/todo-app.png`}
          imgAlt="To do app"
          projectTitle="Todo App in React Redux"
          projectDescription="An organizational to do-app built in React using Redux. The user can add, delete, prioritize and check off tasks and categorize them in projects."
          listItems={[
            { key: 1, text: 'React' },
            { key: 2, text: 'Redux' },
            { key: 3, text: 'Styled Components' },
            { key: 4, text: 'JavaScript' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-todos/pull/445"
          liveLink="https://to-do-project-vera.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/labyrinth-project.png`}
          imgAlt="Labyrinth game"
          projectTitle="Labyrinth Game API"
          projectDescription="Can you navigate your way out of the space maze? This game app is built with React and Redux and connects to an API that provides the positions of the labyrinth."
          listItems={[
            { key: 1, text: 'React' },
            { key: 2, text: 'Redux' },
            { key: 3, text: 'Styled Components' },
            { key: 4, text: 'JavaScript' },
            { key: 7, text: 'Mob-programming' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-labyrinth/pull/194"
          liveLink="https://the-great-space-maze.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/survey-project.png`}
          imgAlt="Survey App starter page"
          projectTitle="Survey App with React"
          projectDescription="A film generator where the user gets to answer a series of questions about their cinema preferences and gets recommended a handpicked favorite of mine from a custom database."
          listItems={[
            { key: 1, text: 'React' },
            { key: 4, text: 'JavaScript' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-survey/pull/447"
          liveLink="https://survey-project-vera-sjunnesson.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/design-handoff-project.jpg`}
          imgAlt="A tablet in a bag displaying the UX design landing page"
          projectTitle="UX Design Collaboration"
          projectDescription="Team work with UX designer Linnéa Rådahl who had created a landing page for a fitness app. Bringing her design hand-off to life I used React and styled components deepening my skills in the collarative process."
          listItems={[
            { key: 1, text: 'React' },
            { key: 3, text: 'Styled Components' },
            { key: 4, text: 'JavaScript' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-design-handoff/pull/31"
          liveLink="https://project-design-handoff-verasjunnesson.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/movie-globe-02.png`}
          imgAlt="Laptop displaying Movie Globe app"
          projectTitle="Movie Globe - Backend and Frontend"
          projectDescription="An interactive movie map that lets the user travel the world through movie locations. Each pin represent a location of a key scene from a movie in our curated database.  New locations can be added, commented on and saved by registered users. Backend and frontend work in this collaboration with Jonas Jakobson."
          listItems={[
            { key: 1, text: 'React' },
            { key: 2, text: 'Redux' },
            { key: 8, text: 'Node.js' },
            { key: 9, text: 'MongoDB' },
            { key: 10, text: 'REST API' },
            { key: 11, text: 'Pair-Programming' }
          ]}
          githubLink="https://github.com/Vera-Sjunnesson/movie-globe-backend"
          liveLink="https://movie-globe.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/authentification.png`}
          imgAlt="Authentication Project"
          projectTitle="Authentication Project"
          projectDescription="Authentication project where a user can create an account, post messages to their user and sign in and out."
          listItems={[
            { key: 1, text: 'React' },
            { key: 8, text: 'Node.js' },
            { key: 9, text: 'MongoDB' },
            { key: 10, text: 'REST API' },
            { key: 7, text: 'Mob-programming' }
          ]}
          githubLink="https://github.com/Vera-Sjunnesson/project-auth-vera"
          liveLink="https://calm-custard-0d2bb8.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/movie-platform.png`}
          imgAlt="Laptop displaying Movie releases platform"
          projectTitle="Movie Releases in React"
          projectDescription="A multi-page movie application using React Router and an API from The Movie Database. The user gets to explore details about popular movies from a selection of dynamic content based on one’s genre preferences."
          listItems={[
            { key: 1, text: 'React' },
            { key: 4, text: 'JavaScript' },
            { key: 12, text: 'API' },
            { key: 11, text: 'Pair-Programming' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-movies/pull/320"
          liveLink="https://vsmovies.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/happy-thoughts-project-backend.png`}
          imgAlt="Laptop on desk displaying happy thoughts chatt app"
          projectTitle="Happy Thoughts with MongoDB"
          projectDescription="A version of Twitter which only allows happy thoughts! This application uses React to both send and receive data from an API. In addition to writing their own messages, the user can see other users post and send likes."
          listItems={[
            { key: 1, text: 'React' },
            { key: 4, text: 'JavaScript' },
            { key: 8, text: 'Node.js' },
            { key: 9, text: 'MongoDB' },
            { key: 10, text: 'REST API' }
          ]}
          githubLink="https://github.com/Technigo/project-happy-thoughts/pull/450"
          liveLink="https://happy-thoughts-vera-sjunnesson.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/wearher.app.narrow.jpg`}
          imgAlt="Phone displaying the weather app"
          projectTitle="Weather app built in Javascript"
          projectDescription="An app to check today's weather as well as a 5-day forecast in whatever city the user searches for, while having the styling change according to the weather and time of day."
          listItems={[
            { key: 4, text: 'JavaScript' },
            { key: 12, text: 'API' },
            { key: 11, text: 'Pair-Programming' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-weather-app/pull/294"
          liveLink="https://vera-matilda-weather-app.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/express-api.png`}
          imgAlt="Express API"
          projectTitle="Express API + React"
          projectDescription="Search for all female artists in the the Museum of Modern Art New York collection!"
          listItems={[
            { key: 1, text: 'React' },
            { key: 8, text: 'Node.js' },
            { key: 10, text: 'REST API' }
          ]}
          githubLink="https://github.com/Vera-Sjunnesson/project-express-api"
          liveLink="https://express-api-project-vera.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/guess-who.jpeg`}
          imgAlt="Tablet displaying the guess-who game"
          projectTitle="Guess Who - the game"
          projectDescription="A take on the classic &quot;Guess who game&quot;, built in Javascript using array methods such as filtering. Have a go!"
          listItems={[
            { key: 4, text: 'JavaScript' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-guess-who/pull/304"
          liveLink="https://effortless-ninja-f73289.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/business-site.jpg`}
          imgAlt="Tablet displaying the business site"
          projectTitle="Business site"
          projectDescription="A one-page website for a fictional business offering swimming classes and containing a video header, a signup form, and an accordion."
          listItems={[
            { key: 7, text: 'Mob-programming' },
            { key: 4, text: 'JavaScript' },
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' }
          ]}
          githubLink="https://github.com/Technigo/project-business-site/pull/328"
          liveLink="https://fluffy-kitsune-4c750d.netlify.app/" />
        <ProjectCard
          imgSource={`${process.env.PUBLIC_URL}/images/news-site.jpeg`}
          imgAlt="Tablet displaying the news site"
          projectTitle="Magazine site"
          projectDescription="A responsive landing page for a fictional magazine with a classic layout structure using the Box Model, Grid and Flexbox."
          listItems={[
            { key: 5, text: 'CSS' },
            { key: 6, text: 'HTML' },
            { key: 13, text: 'Flexbox' },
            { key: 14, text: 'Grid' }
          ]}
          githubLink="https://github.com/Technigo/project-news-site/pull/399"
          liveLink="https://spontaneous-otter-5c0599.netlify.app/" />
      </ProjectsWrapper>
    </ProjectSection>
  )
}
