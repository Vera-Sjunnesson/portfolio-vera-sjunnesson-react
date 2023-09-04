import styled from 'styled-components/macro';

export const FooterSection = styled.footer`
    padding: 64px 22px 93px 22px;
    display: flex;
    flex-direction: column;
    gap: 56px;
    position: relative;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100vh;
    padding: 0;
    align-items: center;
    justify-content: center;
    gap: 75px;
    position: relative;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    padding: 0;
    align-items: center;
    justify-content: center;
    gap: 75px;
  }
`

export const FooterHeader = styled.h4`
    font-size: 80px;
    line-height: 80px;
    font-weight: 900;
    color: var(--primary-headline-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 120px;
    line-height: 160px;
  }

  @media (min-width: 1280px) {
    font-size: 120px;
    line-height: 160px;
  }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;

  @media (min-width: 744px) and (max-width: 1280px) {
    flex-direction: row;
    align-self: center;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    align-self: center;
    margin-bottom: 0;
  }
`

export const FooterAddress = styled.address`

  @media (min-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const EmailButton = styled.button`
    font-family: 'Satoshi-Bold', sans-serif;
    margin-bottom: 10px;
    &:hover {
        background-color: var(--tertiary-button-hover-color);
        color: var(--secondary-color);
    }
`

export const PhoneNumber = styled.p`
    font-family: var(--primary-font-family);
    font-family: 'Satoshi-Bold', sans-serif;
    font-size: 20px;
    line-height: 27px;
    padding: 10.5px 16px 10.5px 10px;
    width: fit-content;
`