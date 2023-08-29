import React from 'react'
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { Header } from 'components/pages/header/Header'
import { Tech } from 'components/pages/tech/Tech'
import { Projects } from 'components/pages/projects/Projects'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Tech />
      <Projects />
    </>
  )
}
