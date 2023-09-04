import styled from 'styled-components/macro';

export const SkillSection = styled.section`
    background-color: #f85f36;
    padding: 64px 93.5px 90px 93.5px;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0px 93.5px;
    position: relative;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    padding: 0px 93.5px;
  }
`

export const SkillsHeader = styled.h4`
    font-size: 80px;
    margin-bottom: 64px;
    line-height: 108px;
    text-align: center;
    color: var(--primary-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    text-align: center;
    margin-bottom: 79px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 79px;
  }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 66px;
    align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 44px;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`