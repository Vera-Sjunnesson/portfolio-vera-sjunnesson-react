import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-awesome-reveal';

export const Article = styled.article`

  @media (min-width: 744px) and (max-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    max-width: 100%;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap:40px;
  }
`

export const ArticleImg = styled.img`

  @media (min-width: 744px) and (max-width: 1280px) {
    max-width: 100%;
    height: 280px;
    width: 184px;
  }

  @media (min-width: 1280px) {
    width: 388px;
    height: 280px;
  }
`

export const ImgContainer = styled.div`
  display: contents;

  @media (min-width: 1280px) {
    display: block;
    width: 388px;
    height: 280px;
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

export const Description = styled.p`

@media (min-width: 744px) and (max-width: 1280px) {
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$long ? '8' : '3')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1280px) {
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$long ? '8' : '3')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export const Header = styled.h5`

@media (min-width: 744px) {
  margin-bottom: 12px;
}
`

export const TechList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  justify-content: row;
  margin-top: 15px;
`

export const TechItem = styled.li`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 21.6px;
  padding: 2px 6px;
  display: inline-block;
  margin: 0 5px 5px 0;
`

export const ProjectButtons = styled.div`
  display: contents;

@media (min-width: 744px) and (max-width: 1280px) {
  display: flex;
  margin-top: 15px;
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
    background-color: ${(props) => (props.$github ? '#1d8e4a' : 'var(--secondary-button-hover-color)')};
  }
`

export const ShowMoreButton = styled.button`
  background-color: #f5f5f5;
  padding: 2px 6px;
  font-family: var(--secondary-font-family);
  font-size: 20px;
  line-height: 21.6px;
  border-radius: 0px;
  margin: 5px 0px 0px 0px;

  &:hover {
    background-color: #ebebeb;
  }
`

export const ProjectCard = ({
  imgSource,
  imgAlt,
  projectTitle,
  projectDescription,
  listItems = [],
  githubLink,
  liveLink
}) => {
  const [showText, setShowText] = useState(false)
  const [longText, setLongText] = useState(false)
  const descriptionRef = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 774, maxWidth: 1280 })
  const isMobile = useMediaQuery({ query: '(min-width: 774px)' })

  useEffect(() => {
    if (isDesktop || isTablet) {
      if (!longText && descriptionRef.current.scrollHeight > 90) {
        setLongText(true);
        setShowText(true);
      } else if (longText && descriptionRef.current.scrollHeight < 90) {
        setLongText(false);
        setShowText(false);
      }
    } else if (isMobile) {
      setLongText(false);
      setShowText(false);
    }
  }, [isDesktop, isMobile, isTablet, longText]);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <Fade
      duration={2000}>
      <Article>
        <ImgContainer>
          <ArticleImg src={imgSource} alt={imgAlt} />
        </ImgContainer>
        <TextWrapper>
          <TextCard>
            <Header>{projectTitle}</Header>
            <Description $long={!showText} ref={descriptionRef}>
              {projectDescription}
            </Description>
            {isDesktop && longText && (
              <ShowMoreButton type="button" onClick={toggleText}>
                {!showText ? 'Read Less' : 'Read More'}
              </ShowMoreButton>
            )}
            {isTablet && longText && (
              <ShowMoreButton type="button" onClick={toggleText}>
                {!showText ? 'Read Less' : 'Read More'}
              </ShowMoreButton>
            )}
            <TechList>
              {listItems.map((item) => (
                <TechItem key={item.key}>{item.text}</TechItem>
              ))}
            </TechList>
          </TextCard>
          <ProjectButtons>
            <ProjectButton $github type="button" onClick={() => window.open(githubLink)}><FontAwesomeIcon icon={faGithub} aria-hidden="true" />View the code</ProjectButton>
            <ProjectButton type="button" onClick={() => window.open(liveLink)}><FontAwesomeIcon icon={faGlobe} aria-hidden="true" />Live demo</ProjectButton>
          </ProjectButtons>
        </TextWrapper>
      </Article>
    </Fade>
  )
}