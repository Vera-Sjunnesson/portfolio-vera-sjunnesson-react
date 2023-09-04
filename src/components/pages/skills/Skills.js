import React from 'react'
import { SkillList } from 'components/lib/SkillList'
import { Fade } from 'react-awesome-reveal';
import { SkillSection, SkillsHeader, SkillsContainer } from './SkillsStyle'

export const Skills = ({ skillsRef }) => {
  return (
    <SkillSection ref={skillsRef}>
      <Fade
        duration={2000}>
        <SkillsHeader>Skills</SkillsHeader>
      </Fade>
      <Fade
        duration={2000}>
        <SkillsContainer>
          <SkillList
            skillTitle="Code"
            inputColor="var(--primary-button-hover-color)"
            skillItems={[
              { key: 1, text: 'HTML5' },
              { key: 2, text: 'CSS3' },
              { key: 3, text: 'Javascript ES6' },
              { key: 4, text: 'React.js' },
              { key: 5, text: 'Styled Components' },
              { key: 6, text: 'Redux' },
              { key: 7, text: 'React Native' },
              { key: 8, text: 'Node.js' },
              { key: 9, text: 'REST API:s' },
              { key: 10, text: 'MongoDB' }
            ]} />
          <SkillList
            skillTitle="Toolbox"
            inputColor="#2483E0"
            skillItems={[
              { key: 11, text: 'Git' },
              { key: 12, text: 'VSCode' },
              { key: 13, text: 'Postman' },
              { key: 14, text: 'GitHub' },
              { key: 15, text: 'Figma / FigJam' },
              { key: 16, text: 'Adobe Creative Suite' },
              { key: 17, text: 'Slack' }
            ]} />
          <SkillList
            skillTitle="More"
            inputColor="#0B24F5"
            skillItems={[
              { key: 18, text: 'Web Accessibility' },
              { key: 19, text: 'Agile methodology' },
              { key: 20, text: 'UX / UI Design' },
              { key: 21, text: 'Graphic Design' },
              { key: 22, text: 'Video Editing' },
              { key: 23, text: 'Concept Development' }
            ]} />
          <SkillList
            skillTitle="Upcoming"
            inputColor="#1d8e4a"
            skillItems={[
              { key: 24, text: 'TypeScript' },
              { key: 25, text: 'Angular' }
            ]} />
        </SkillsContainer>
      </Fade>
    </SkillSection>
  )
}