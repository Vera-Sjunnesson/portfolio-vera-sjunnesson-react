import styled from 'styled-components/macro';

export const ProjectSection = styled.section`
  padding: 64px 24px 93px 24px;
  position: relative;
  background-color: var(--primary-container-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 120px 24px;
    position: relative;
  }

  @media (min-width: 1280px) and (max-width: 1512px) {
    height: 100vh;
    padding: 0px 207px;
    position: relative;
  }

  @media (min-width: 1512px) {
    height: 100vh;
    padding: 0px 323px;
    position: relative;
  }
`

export const ProjectHeading = styled.h4`
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 64px;
  color: var(--secondary-headline-color);

  @media (min-width: 280px) and (max-width: 350px) {
    font-size: 55px;
  }

  @media (min-width: 350px) and (max-width: 744px) {
    font-size: 72px;
    line-height: 80px;
  }

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 80px;
    line-height:108px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    line-height: 108px;
    margin-bottom: 70px;
    padding-top: 120px;
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (min-width: 1280px) {
    gap: 120px;
  }
`