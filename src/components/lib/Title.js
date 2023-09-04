import React from 'react'
import styled from 'styled-components/macro';
import { TitleCard, PortraitCard, PortraitImg, HeaderTitles } from 'components/pages/header/HeaderStyles'

export const Spanh3 = styled.span`
  font-weight: 400;
}
`

export const Title = () => {
  return (
    <TitleCard>
      <PortraitCard>
        <PortraitImg src={`${process.env.PUBLIC_URL}/images/vera-profile-picture.png`} alt="Image of Vera Sjunnesson" />
      </PortraitCard>
      <HeaderTitles>
        <h1><span>Vera Sjunnesson</span></h1>
        <h2><span>Frontend developer</span></h2>
        <h3><Spanh3>+ digital designer</Spanh3></h3>
      </HeaderTitles>
    </TitleCard>
  )
}