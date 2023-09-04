import React from 'react'
import styled from 'styled-components/macro';

export const SkillSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 200px;

@media (min-width: 744px) {
    align-items: flex-start;
}
`

export const ListHeading = styled.h6`
    font-family: 'Satoshi-Bold', sans-serif;
    font-size: 24px;
    line-height: 32.4px;
    width: fit-content;
    padding: 2px;
    color: var(--secondary-color);
    background-color: ${(props) => props.$inputcolor || '#BF4F74'};
}
`

export const SkillItem = styled.li`
  font-family: var(--secondary-font-family);
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-align: center;

  @media (min-width: 744px) {
    text-align: left;
  }
`

export const SkillList = ({ skillTitle, inputColor, skillItems = [] }) => {
  return (
    <SkillSection>
      <ListHeading $inputcolor={inputColor}>
        {skillTitle}
      </ListHeading>
      <ul>
        {skillItems.map((skillItem) => (
          <SkillItem key={skillItem.key}>{skillItem.text}</SkillItem>
        ))}
      </ul>
    </SkillSection>
  )
}