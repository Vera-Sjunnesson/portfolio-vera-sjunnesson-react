import React from 'react'
import styled from 'styled-components/macro';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Article = styled.article`

  @media (min-width: 744px) and (max-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    height: 280px;
    max-width: 100%;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap:40px;
    height: 280px;
  }
`

export const ArticleImg = styled.img`

  @media (min-width: 1280px) {
    max-width: 388px;
  }
`

export const TextWrapper = styled.div`
  display: contents;

@media (min-width: 744px) and (max-width: 1280px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
}

@media (min-width: 1280px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
`

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

@media (min-width: 744px) and (max-width: 1280px) {
  display: contents;
}

@media (min-width: 1280px) {
  display: contents;
}
`

export const TechList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  justify-content: row;
`

export const TechItem = styled.li`
  display:flex;
  flex-wrap: wrap;
  justify-content: row;
`

export const ProjectButtons = styled.div`
  display: contents;

@media (min-width: 744px) and (max-width: 1280px) {
  display: flex;
  margin-top:30px;
  gap:24px;
}

@media (min-width: 1280px) {
  display: flex;
  margin-top: 15px;
  gap: 24px;
}
`

export const ProjectButton = styled.button`
  background-color: var(--button-color);
  color: #333333;

  &:hover {
    color: var(--primary-color);
    background-color: ${(props) => (props.github ? 'var(--primary-button-hover-color)' : 'var(--secondary-button-hover-color)')};
  }
`

export const ProjectCard = ({
  imgSource,
  imgAlt,
  projectTitle,
  projectDescription,
  listItem,
  githubLink,
  liveLink
}) => {
  return (
    <Article>
      <ArticleImg src={imgSource} alt={imgAlt} />
      <TextWrapper>
        <TextCard>
          <h5>{projectTitle}</h5>
          <p>
            {projectDescription}
          </p>
          <TechList>
            <TechItem>{listItem}</TechItem>
          </TechList>
        </TextCard>
        <ProjectButtons>
          <ProjectButton github onClick={`window.open(${githubLink});`}><FontAwesomeIcon icon={faGithub} aria-hidden="true" />View the code</ProjectButton>
          <ProjectButton onClick={`window.open(${liveLink});`}><FontAwesomeIcon icon={faGlobe} aria-hidden="true" />Live demo</ProjectButton>
        </ProjectButtons>
      </TextWrapper>

    </Article>
  )
}