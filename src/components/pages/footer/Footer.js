import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { Title } from 'components/lib/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { SocialMedia } from 'components/lib/SocialMedia'
import { FooterSection, FooterHeader, FooterContainer, FooterAddress, EmailButton, PhoneNumber } from './FooterStyle'

export const Footer = ({ footerRef, setDownButton }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vera.kastrup@gmail.com';
  }

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    console.log(bottom)
    if (bottom) {
      console.log('bottom')
      setDownButton(false)
    }
  }

  /*   window.addEventListener('scroll', handleScroll); */

  return (
    <FooterSection ref={footerRef} onScroll={handleScroll}>
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