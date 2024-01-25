import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { Title } from 'components/sections/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { SocialMedia } from 'components/sections/SocialMedia'
import { FooterSection, FooterHeader, FooterContainer, FooterAddress, EmailButton, PhoneNumber } from './FooterStyle'

export const Footer = ({ footerRef }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vera.kastrup@gmail.com';
  }

  return (
    <FooterSection
      ref={footerRef}>
      <Fade
        duration={2000}>
        <FooterHeader>
          Time to talk
        </FooterHeader>
        <FooterContainer>
          <Title />
        </FooterContainer>
        <FooterAddress>
          <EmailButton
            type="button"
            onClick={handleEmailClick}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              aria-hidden="true" />
              Email me!
          </EmailButton>
          <PhoneNumber>
            +46 (0)763-196-231
          </PhoneNumber>
        </FooterAddress>
        <SocialMedia footer="true" />
      </Fade>
    </FooterSection>
  )
}