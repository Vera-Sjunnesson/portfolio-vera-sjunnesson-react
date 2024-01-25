import React from 'react'
import { SkillList } from 'components/sections/SkillList'
import { Fade } from 'react-awesome-reveal';
import { SkillSection, SkillsHeader, SkillsContainer } from './SkillsStyle'
import code from '../../../data/code'
import toolbox from '../../../data/toolbox'
import more from '../../../data/more'
import upcoming from '../../../data/upcoming'

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