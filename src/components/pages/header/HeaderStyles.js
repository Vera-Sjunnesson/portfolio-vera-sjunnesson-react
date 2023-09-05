import styled from 'styled-components/macro';

export const HeaderWrap = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  padding: 58px 24px;
  padding-bottom: 0;
  margin-bottom: 50px;
  position: relative;
  background-color: #fffdfb;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0;
    width: 100%;
    gap: 0;
    justify-content: flex-start;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    padding: 0;
    flex-direction: row;
    height: 100vh;
    margin-bottom: 0;
  }
`

export const HeaderTextBlock = styled.div`

  display: contents;
  z-index: 1001;
  background-color: transparent;


  @media (min-width: 744px) and (max-width: 1280px) {
    display: block;
    width: 100%;
    height: 744px;
    position: relative;
  }

  @media (min-width: 1280px) {
    display: block;
    width: 50%;
    height: 100%;
    position: relative;
  }
`

export const HeaderImgBlock = styled.div`
  position: relative;
  background-color: var(--primary-container-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 100%;
    height: 496px;
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
    height: 623px;
    position: absolute;
    left: calc(50% - 540px/2);
    top: calc(50% - 623px/2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    width: 540px;
    height: 636px;
    position: absolute;
    left: calc(50% - 540px/2);
    top: calc(50% - 600px/2);
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
    width: 506px;
    display: flex;
    justify-content: flex-start;
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
  padding: 0px;
  box-sizing: border-box;
  width:100%;
  margin-bottom: 37px;

  @media (min-width: 744px) {
    margin: 0px;
    align-self: center;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
    background-color: #fffdfb;
    padding: 2px 5px;
  }
`
export const HeaderText = styled.p`
  box-sizing: border-box;
  margin-bottom: 18px;
  font-size: 20px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 500px;
    align-self: flex-end;
  }

  @media (min-width: 1280px) {
    width: 500px;
    align-self: flex-end;
  }
`
