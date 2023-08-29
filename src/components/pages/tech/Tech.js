import React from 'react'
import { TechSection, TechText, Mark } from './TechStyles'

export const Tech = () => {
  return (
    <TechSection>
      <div>
        <h4>Tech</h4>
      </div>
      <div>
        <TechText>
            HTML, CSS, Flexbox,&nbsp;
          <Mark javascript>JavaScript</Mark>,
            &nbsp;ES6, JSX,&nbsp;
          <br /><Mark react>React</Mark>,
            &nbsp;React Hooks, Redux, Node.js, MongoDB, Web&nbsp;Accessibly, API:s,&nbsp;
          <Mark mob>mob-programming</Mark>,
            &nbsp;pair-&nbsp;programming, Github.
        </TechText>
      </div>
    </TechSection>
  )
}