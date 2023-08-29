import React from 'react'
import { TitleCard, PortraitCard, PortraitImg, HeaderTitles } from 'components/pages/header/HeaderStyles'

export const Title = () => {
  return (
    <TitleCard>
      <PortraitCard>
        <PortraitImg src={`${process.env.PUBLIC_URL}/images/vera-profile-picture.png`} alt="Image of Vera Sjunnesson" />
      </PortraitCard>
      <HeaderTitles>
        <h1>Vera Sjunnesson</h1>
        <h2>Frontend developer</h2>
        <h3>+ digital designer</h3>
      </HeaderTitles>
    </TitleCard>
  )
}