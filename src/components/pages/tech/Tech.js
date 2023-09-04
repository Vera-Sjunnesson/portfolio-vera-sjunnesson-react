import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { TechSection, TechHeading, TechText, MarkGreen, MarkRed, MarkBlue } from './TechStyles'

export const Tech = ({ techRef }) => {
/*   useEffect(() => {
    console.log(techRef.current)
    if (techRef.current) {
      setCurrentSection(1)
    }
  }, [setCurrentSection, techRef]) */

  return (
    <TechSection ref={techRef}>
      <Fade
        duration={2000}
        triggerOnce>
        <div>
          <TechHeading>
            Tech
          </TechHeading>
        </div>
        <TechText>
          HTML, CSS, Flexbox,&nbsp;
          <MarkGreen>JavaScript</MarkGreen>,&nbsp;
          ES6, JSX,&nbsp;
          <MarkRed>React</MarkRed>,
          React Hooks, Redux, Node.js, MongoDB, Web&nbsp;Accessibly, API:s,&nbsp;
          <MarkBlue>mob-programming</MarkBlue>,
          pair-programming, Github.
        </TechText>
      </Fade>
    </TechSection>
  )
}