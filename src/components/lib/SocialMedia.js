import React from 'react'
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { SocialMediaCard, StyledFontAwesomeIcon } from '../pages/header/HeaderStyles'

export const SocialMedia = () => {
  return (
    <SocialMediaCard>
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
