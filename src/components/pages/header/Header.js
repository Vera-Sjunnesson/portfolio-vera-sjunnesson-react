/* eslint-disable max-len */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Title } from 'components/lib/Title'
import { SocialMedia } from '../../lib/SocialMedia'
import { HeaderWrap, HeaderText, HeaderFeatureImg, PresentationCard, HeaderTextBlock, HeaderImgBlock } from './HeaderStyles'

export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 774, maxWidth: 1280 })
  return (
    <HeaderWrap>
      {isTablet && (
        <HeaderImgBlock>
          <HeaderFeatureImg src={`${process.env.PUBLIC_URL}/images/the-sun.jpeg`} alt="abstract sun" />
        </HeaderImgBlock>
      )}
      <HeaderTextBlock>
        <PresentationCard>
          <Title />
          <HeaderText>
            A curious and creative frontend developer with a strong focus on the user experience and graphic design. With more than 7 years of experience in the film industry, working as an independent scriptwriter, art department creative, and graphic designer, I bring a unique visual perspective to my work. Having earned an MFA degree in film production from New York University and a degree in visual art from Konstfack, Stockholm, I approach any problem with an open and imaginative approach.
          </HeaderText>
          <SocialMedia />
        </PresentationCard>
      </HeaderTextBlock>
      {isDesktop && (
        <HeaderImgBlock>
          <HeaderFeatureImg src={`${process.env.PUBLIC_URL}/images/the-sun.jpeg`} alt="abstract sun" />
        </HeaderImgBlock>
      )}
    </HeaderWrap>
  )
}
