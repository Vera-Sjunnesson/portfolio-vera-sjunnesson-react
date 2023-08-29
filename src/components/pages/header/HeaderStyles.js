import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderWrap = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  padding: 58px 24px;
  padding-bottom: 0;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0;
    width: 100%;
    height: 1240px;
    gap: 0;
    justify-content: flex-start;
    position: relative;
  }

  @media (min-width: 1280px) {
    padding: 0;
    flex-direction: row;
    height: 100vh;
  }
`

export const HeaderTextBlock = styled.div`

  display: contents;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    width: 100%;
    height: 60%;
    position: relative;
    background-color: var(--primary-color);
  }

  @media (min-width: 1280px) {
    display: block;
    width: 50%;
    height: 100%;
    position: relative;
    background-color: var(--primary-color);
  }
`

export const HeaderImgBlock = styled.div`
  position: relative;
  background-color: var(--primary-container-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 100%;
    height: 40%;
  }

  @media (min-width: 1280px) {
    width: 50%;
    height: 100%;
  }
`

export const HeaderFeatureImg = styled.img`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
`

export const PresentationCard = styled.div`

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 540px;
    height: 431px;
    position: absolute;
    left: calc(45% - 540px/2);
    top: calc(50% - 431px/2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    width: 540px;
    height: 431px;
    position: absolute;
    left: calc(50% - 540px/2);
    top: calc(50% - 431px/2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TitleCard = styled.div`
  display: contents;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: flex;
    justify-content: flex-start;
    width:100%;
    align-items: center;
    gap: 29px;
    width: 496px;
    align-self: flex-start;
    margin-bottom: 32px;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    gap: 29px;
    width: 496px;
    align-self: flex-start;
    margin-bottom: 32px;
  }
`

export const PortraitCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width:100%;
  margin-bottom: 29px;

  @media (min-width: 744px) {
    display: contents;
  }
`
export const PortraitImg = styled.img`
  width: 164px;
  height: 164px;
  border-radius:50%;
  object-fit: cover;
`

export const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 0px;
  box-sizing: border-box;
  width:100%;
  margin-bottom: 37px;

  @media (min-width: 744px) and (max-width: 1280px) {
    margin: 0px;
    align-self: center;
  }
`
export const HeaderText = styled.p`
  box-sizing: border-box;
  margin-bottom: 48px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 500px;
    align-self: flex-end;
  }

  @media (min-width: 1280px) {
    width: 500px;
    align-self: flex-end;
  }
`

export const SocialMediaCard = styled.div`
  display: inline-flex;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 288px;
    margin-left: 40px;
    margin-bottom: 58px;
  }

  @media (min-width: 1280px) {
    width: 288px;
    margin-left: 40px;
    margin-bottom: 58px;
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--icon-color);
  font-size: 30px;

  &:hover {
    color: var(--icon-hover-color)
  }
`;
