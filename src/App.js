import React from 'react'
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { AllPages } from 'components/pages/AllPages'
import { ScrollerMotion } from 'scroller-motion'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollerMotion>
        <AllPages />
      </ScrollerMotion>
    </>
  )
}
