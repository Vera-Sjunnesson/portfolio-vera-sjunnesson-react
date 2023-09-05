import styled from 'styled-components/macro';

export const ProjectSection = styled.section`
  padding: 64px 24px 93px 24px;
  position: relative;
  background: #fffdfb;

  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 120px 24px;
    position: relative;
  }

  @media (min-width:1280px) and (max-width:1512px) {
    padding: 120px 220px 92px 220px;
    position: relative;
  }

  @media (min-width:1512px) {
    padding: 120px 346px 92px 346px;
    position: relative;
  }
`

export const ProjectHeading = styled.h4`
  margin-bottom: 64px;
  font-weight: 900;

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 80px;
    line-height:108px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    line-height: 108px;
    margin-bottom: 40px;
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