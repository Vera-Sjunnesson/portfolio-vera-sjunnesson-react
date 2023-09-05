import React from 'react'
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export const SocialMediaCard = styled.div`
  display: inline-flex;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 288px;
    margin-left: 40px;
    margin-bottom: 58px;
    ${(props) => props.$center && 'justify-content: center;'}
    margin-left: ${(props) => (props.$center ? '0px' : '40px')}
  }

  @media (min-width: 1280px) {
    width: 288px;
    margin-left: 40px;
    margin-bottom: 58px;
    ${(props) => props.$center && 'justify-content: center;'}
    margin-left: ${(props) => (props.$center ? '0px' : '40px')}
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #a09d9d;
  font-size: 30px;

  &:hover {
    color: var(--icon-hover-color)
  }
`;

export const SocialMedia = ({ footer }) => {
  return (
    <SocialMediaCard $center={footer}>
      <a
        href="https://www.linkedin.com/in/vera-sjunnesson-8a546a169/"
        target="_blank"
        aria-label="linkedin"
        rel="noreferrer">
        <StyledFontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
      </a>
      <a
        href="https://github.com/Vera-Sjunnesson"
        target="_blank"
        aria-label="github"
        rel="noreferrer">
        <StyledFontAwesomeIcon icon={faGithub} aria-hidden="true" />
      </a>
      <a
        href="https://stackoverflowteams.com/c/technigo/users/436/"
        target="_blank"
        aria-label="stack overflow"
        rel="noreferrer">
        <StyledFontAwesomeIcon icon={faStackOverflow} aria-hidden="true" />
      </a>
    </SocialMediaCard>
  )
}
