import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Title } from 'components/lib/Title'
import { LineAnimation } from 'components/lib/LineAnimation'
import { SocialMedia } from '../../lib/SocialMedia'
import { HeaderWrap, HeaderText, HeaderFeatureImg, PresentationCard, HeaderTextBlock, HeaderImgBlock } from './HeaderStyles'

export const Header = ({ headerRef }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 774, maxWidth: 1280 })

  return (
    <HeaderWrap ref={headerRef}>
      {isDesktop && (
        <LineAnimation />
      )}
      {isTablet && (
        <HeaderImgBlock>
          <HeaderFeatureImg
            src="https://i.postimg.cc/YC9Y0Bj3/the-sun.jpg"
            alt="abstract sun" />
        </HeaderImgBlock>
      )}
      <HeaderTextBlock>
        <PresentationCard>
          <Title />
          <HeaderText>
            {/* eslint-disable-next-line max-len */}
            I&apos;m a React developer and designer seeking opportunities within the tech industry. I thrive on challenging projects, embrace new technologies, and bring a unique perspective thanks to my background in film and visual art. With experience in roles such as a graphic designer, art department creative, and scriptwriter in both the United States and Sweden, I&apos;ve developed valuable skills in collaboration, adaptability and creativity.
          </HeaderText>
          <HeaderText>
            {/* eslint-disable-next-line max-len */}
            Having earned an MFA degree in film production from New York University and a degree in visual art from Konstfack, Stockholm, I approach any problem with an open and imaginative mindset.
          </HeaderText>
          <HeaderText>
            {/* eslint-disable-next-line max-len */}
            In my spare time, I develop projects that promote female representation in film and tango events.
          </HeaderText>
          <SocialMedia />
        </PresentationCard>
      </HeaderTextBlock>
      {isDesktop && (
        <HeaderImgBlock>
          <HeaderFeatureImg
            src="https://i.postimg.cc/YC9Y0Bj3/the-sun.jpg"
            alt="abstract sun" />
        </HeaderImgBlock>
      )}
    </HeaderWrap>
  )
}

