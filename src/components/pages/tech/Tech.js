import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { TechSection, TechHeading, TechText, TechTextSpan, MarkGreen, MarkRed, MarkBlue } from './TechStyles'

export const Tech = ({ techRef }) => {
  return (
    <TechSection ref={techRef}>
      <Fade
        duration={2000}>
        <div>
          <TechHeading>
            Tech
          </TechHeading>
        </div>
        <TechText>
          <TechTextSpan>
            HTML, CSS, Flexbox,&nbsp;
            <MarkGreen>JavaScript</MarkGreen>,&nbsp;
            ES6, JSX,&nbsp;
            <MarkRed>React</MarkRed>,
            React Hooks, Redux, Node.js, MongoDB, Web&nbsp;Accessibly, API:s,&nbsp;
            <MarkBlue>mob-programming</MarkBlue>,
            pair-programming, Github.
          </TechTextSpan>
        </TechText>
      </Fade>
    </TechSection>
  )
}