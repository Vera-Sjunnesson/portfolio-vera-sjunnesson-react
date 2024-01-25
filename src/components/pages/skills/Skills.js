import React from 'react'
import { SkillList } from 'components/lib/SkillList'
import { Fade } from 'react-awesome-reveal';
import { SkillSection, SkillsHeader, SkillsContainer } from './SkillsStyle'
import code from '../../data/code.json'
import toolbox from '../../data/toolbox.json'
import more from '../../data/more.json'
import upcoming from '../../data/upcoming.json'

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
            data={code}
            skillTitle="Code"
            inputColor="#94b647" />
          <SkillList
            data={toolbox}
            skillTitle="Toolbox"
            inputColor="#ffba1d" />
          <SkillList
            data={more}
            skillTitle="More"
            inputColor="#b2cee5" />
          <SkillList
            data={upcoming}
            skillTitle="Upcoming"
            inputColor="#febfcb" />
        </SkillsContainer>
      </Fade>
    </SkillSection>
  )
}